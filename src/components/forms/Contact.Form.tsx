import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import apiClient from '@/common/clients/api.client';
import { trapSpacesForRequiredFields } from '@/common/utils/Form.util';
import type { ContactFormData } from '@/types/form.types';

import FormError from './Error.Form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const HP = document.querySelector('#requirements') as HTMLInputElement;

    if (HP?.value) return;
    setIsSubmitting(true);
    const response = await apiClient.sendContactMail(data);

    if (response?.success) {
      alert(t('forms.contact-success'));
    } else {
      alert(t('forms.contact-fail'));
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
      className="grid h-full w-full grid-cols-1 place-content-start gap-5 border border-stone-700 bg-stone-800 p-5 lg:grid-cols-2 lg:p-10"
    >
      <h3 className="col-span-full flex flex-row items-start justify-start gap-2 text-left text-2xl font-bold text-white italic">
        {t('contact.content.form.title')}
      </h3>
      <label
        htmlFor="name"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
      >
        <span className="text-sm font-medium text-zinc-300">
          {t('forms.name.label')}
        </span>
        <input
          id="name"
          placeholder={t('forms.name.placeholder')}
          {...register('name', {
            required: t('forms.error.required'),
            validate: (value) =>
              trapSpacesForRequiredFields(value) || t('forms.error.required'),
          })}
          className="focus:border-primary w-full border border-stone-600 p-2 text-sm text-white placeholder-stone-500 ring-0! outline-0! transition-all duration-200"
        />
        <FormError error={errors.name?.message} />
      </label>
      <label
        htmlFor="surname"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
      >
        <span className="text-sm font-medium text-zinc-300">
          {t('forms.surname.label')}
        </span>
        <input
          id="surname"
          placeholder={t('forms.surname.placeholder')}
          {...register('surname', {
            required: t('forms.error.required'),
            validate: (value) =>
              trapSpacesForRequiredFields(value) || t('forms.error.required'),
          })}
          className="focus:border-primary w-full border border-stone-600 p-2 text-sm text-white placeholder-stone-500 ring-0! outline-0! transition-all duration-200"
        />
        <FormError error={errors.surname?.message} />
      </label>
      <label
        htmlFor="email"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
      >
        <span className="text-sm font-medium text-zinc-300">
          {t('forms.email.label')}
        </span>
        <input
          id="email"
          placeholder={t('forms.email.placeholder')}
          {...register('email', {
            required: t('forms.error.required'),
            validate: (value) => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              return emailRegex.test(value) || t('forms.error.email-invalid');
            },
          })}
          className="focus:border-primary w-full border border-stone-600 p-2 text-sm text-white placeholder-stone-500 ring-0! outline-0! transition-all duration-200"
        />
        <FormError error={errors.email?.message} />
      </label>
      <input type="text" className="hidden" id="requirements" />
      <label
        htmlFor="phone"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1 lg:col-span-1"
      >
        <span className="text-sm font-medium text-zinc-300">
          {t('forms.phone.label')}
        </span>
        <input
          id="phone"
          placeholder={t('forms.phone.placeholder')}
          {...register('phone', {
            required: t('forms.error.required'),
            validate: (value) => {
              const phoneRegex =
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
              return phoneRegex.test(value) || t('forms.error.phone-invalid');
            },
          })}
          className="focus:border-primary w-full border border-stone-600 p-2 text-sm text-white placeholder-stone-500 ring-0! outline-0! transition-all duration-200"
        />
        <FormError error={errors.phone?.message} />
      </label>
      <label
        htmlFor="message"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1"
      >
        <span className="text-sm font-medium text-zinc-300">
          {t('forms.message.label')}
        </span>
        <textarea
          id="message"
          placeholder={t('forms.message.placeholder')}
          {...register('message', {
            required: t('forms.error.required'),
            validate: (value) =>
              trapSpacesForRequiredFields(value) || t('forms.error.required'),
          })}
          className="focus:border-primary min-h-20 w-full border border-stone-600 p-2 text-sm text-white placeholder-stone-500 ring-0! outline-0! transition-all duration-200"
        />
        <FormError error={errors.message?.message} />
      </label>
      <label
        htmlFor="kvkk"
        className="col-span-full flex w-full flex-col items-start justify-start gap-1"
      >
        <div className="flex items-center gap-2">
          <input
            id="kvkk"
            type="checkbox"
            {...register('kvkk', {
              required: t('forms.error.required'),
            })}
            className="form-checkbox text-primary focus:ring-primary h-4 w-4 border border-zinc-300 bg-stone-500"
          />
          <span className="text-sm text-zinc-300">
            {i18n.language === 'tr' ? (
              <>
                <Link
                  href="/policy/kvkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  KVKK Aydınlatma Metni
                </Link>
                {' kapsamında kişisel verilerimin işlenmesini kabul ediyorum.'}
              </>
            ) : (
              <>
                I consent to the processing of my personal data in accordance
                with the{' '}
                <Link
                  href="/policy/kvkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  KVKK Disclosure Text
                </Link>
                .
              </>
            )}
          </span>
        </div>
        <FormError error={errors.kvkk?.message} />
      </label>
      <section className="col-span-full">
        <button
          type="submit"
          style={{
            letterSpacing: '0.2em',
          }}
          disabled={isSubmitting}
          className="text-md border-primary bg-primary cursor-pointer border px-6 py-3 text-center font-bold text-black uppercase transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-50"
        >
          {isSubmitting ? t('forms.submitting') : t('forms.submit')}
        </button>
      </section>
    </form>
  );
}

export default ContactForm;

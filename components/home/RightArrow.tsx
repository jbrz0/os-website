interface Props {
  RightArrow: JSX.Element,
  arrowHover: string,
  txtHover: string,
}

const RightArrow: React.FC<Props> = (props) => {

  return <>
    <svg className={`fill-current text-purple ${props.arrowHover} inline-block mr-3`}
      width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
      d="M14.2929 6.88713C14.6834 6.49661 15.3166 6.49661
      15.7071 6.88713L19.7065 10.8865L19.7071 10.8871C19.803
      10.983 19.8753 11.0935 19.9241 11.2115C19.973 11.3294
      20 11.4586 20 11.5942C20 11.7293 19.9732 11.8581 19.9247
      11.9756C19.9006 12.034 19.8708 12.0906 19.8352 12.1445C19.7986
      12.1999 19.7559 12.2525 19.7071 12.3013L19.7065 12.3019L15.7071
      16.3013C15.3166 16.6918 14.6834 16.6918 14.2929 16.3013C13.9024
      15.9108 13.9024 15.2777 14.2929 14.8871L16.5858 12.5942H3C2.44771
      12.5942 2 12.1465 2 11.5942C2 11.042 2.44771 10.5942 3
      10.5942H16.5858L14.2929 8.30135C13.9024 7.91082 13.9024
      7.27766 14.2929 6.88713Z" />
    </svg>
    <span className={`inline-block text-gray-300 opacity-50 ${props.txtHover}`}>
      Read More
    </span>
  </>
}

export default RightArrow

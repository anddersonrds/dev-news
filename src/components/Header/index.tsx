import GithubButton from 'components/GithubButton'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <img src="/img/logo.svg" alt="dev.news" />
      <S.Navigation>
        <a href="/" className="active">
          Home
        </a>
        <a href="/">Posts</a>
      </S.Navigation>
      <GithubButton />
    </S.Content>
  </S.Wrapper>
)

export default Header

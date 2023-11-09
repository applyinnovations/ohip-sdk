# ResGuestInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccompanyGuests** | Pointer to [**ResAccompanyGuestListType**](ResAccompanyGuestListType.md) |  | [optional] 
**Address** | Pointer to [**AddressSearchType**](AddressSearchType.md) |  | [optional] 
**AlternateGivenName** | Pointer to **string** | Alternate given name, first name or names | [optional] 
**AlternateSurname** | Pointer to **string** | Alternate family name, last name. | [optional] 
**Anonymization** | Pointer to [**AnonymizationType**](AnonymizationType.md) |  | [optional] 
**BirthDate** | Pointer to **string** | Date of birth | [optional] 
**Email** | Pointer to **string** | Email address | [optional] 
**FullName** | Pointer to **string** | Full display name | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names | [optional] 
**GuestLastStayInformation** | Pointer to [**GuestLastStayInfoType**](GuestLastStayInfoType.md) |  | [optional] 
**GuestRestricted** | Pointer to **bool** | True indicates there are restrictions associated with the current profile. | [optional] 
**GuestRestrictedCode** | Pointer to **string** | Guest profile restricted reason code | [optional] 
**GuestRestrictedReasonDesc** | Pointer to **string** | Guest profile restricted reason description | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**Membership** | Pointer to [**MembershipInfoType**](MembershipInfoType.md) |  | [optional] 
**MiddleName** | Pointer to **string** | The middle name of the person name | [optional] 
**NamePrefix** | Pointer to **string** | Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.) | [optional] 
**NameTitle** | Pointer to **string** | Degree or honors (e.g., Ph.D., M.D.) | [optional] 
**NameType** | Pointer to [**NameTypeType**](NameTypeType.md) |  | [optional] 
**Nationality** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**PhoneNumber** | Pointer to **string** | Phone number | [optional] 
**RegistrationCardNo** | Pointer to **string** | Unique identifier of the police registration card number. | [optional] 
**Surname** | Pointer to **string** | Family name, last name. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Vip** | Pointer to [**VIPType**](VIPType.md) |  | [optional] 

## Methods

### NewResGuestInfoType

`func NewResGuestInfoType() *ResGuestInfoType`

NewResGuestInfoType instantiates a new ResGuestInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResGuestInfoTypeWithDefaults

`func NewResGuestInfoTypeWithDefaults() *ResGuestInfoType`

NewResGuestInfoTypeWithDefaults instantiates a new ResGuestInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccompanyGuests

`func (o *ResGuestInfoType) GetAccompanyGuests() ResAccompanyGuestListType`

GetAccompanyGuests returns the AccompanyGuests field if non-nil, zero value otherwise.

### GetAccompanyGuestsOk

`func (o *ResGuestInfoType) GetAccompanyGuestsOk() (*ResAccompanyGuestListType, bool)`

GetAccompanyGuestsOk returns a tuple with the AccompanyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccompanyGuests

`func (o *ResGuestInfoType) SetAccompanyGuests(v ResAccompanyGuestListType)`

SetAccompanyGuests sets AccompanyGuests field to given value.

### HasAccompanyGuests

`func (o *ResGuestInfoType) HasAccompanyGuests() bool`

HasAccompanyGuests returns a boolean if a field has been set.

### GetAddress

`func (o *ResGuestInfoType) GetAddress() AddressSearchType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *ResGuestInfoType) GetAddressOk() (*AddressSearchType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *ResGuestInfoType) SetAddress(v AddressSearchType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *ResGuestInfoType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAlternateGivenName

`func (o *ResGuestInfoType) GetAlternateGivenName() string`

GetAlternateGivenName returns the AlternateGivenName field if non-nil, zero value otherwise.

### GetAlternateGivenNameOk

`func (o *ResGuestInfoType) GetAlternateGivenNameOk() (*string, bool)`

GetAlternateGivenNameOk returns a tuple with the AlternateGivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateGivenName

`func (o *ResGuestInfoType) SetAlternateGivenName(v string)`

SetAlternateGivenName sets AlternateGivenName field to given value.

### HasAlternateGivenName

`func (o *ResGuestInfoType) HasAlternateGivenName() bool`

HasAlternateGivenName returns a boolean if a field has been set.

### GetAlternateSurname

`func (o *ResGuestInfoType) GetAlternateSurname() string`

GetAlternateSurname returns the AlternateSurname field if non-nil, zero value otherwise.

### GetAlternateSurnameOk

`func (o *ResGuestInfoType) GetAlternateSurnameOk() (*string, bool)`

GetAlternateSurnameOk returns a tuple with the AlternateSurname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateSurname

`func (o *ResGuestInfoType) SetAlternateSurname(v string)`

SetAlternateSurname sets AlternateSurname field to given value.

### HasAlternateSurname

`func (o *ResGuestInfoType) HasAlternateSurname() bool`

HasAlternateSurname returns a boolean if a field has been set.

### GetAnonymization

`func (o *ResGuestInfoType) GetAnonymization() AnonymizationType`

GetAnonymization returns the Anonymization field if non-nil, zero value otherwise.

### GetAnonymizationOk

`func (o *ResGuestInfoType) GetAnonymizationOk() (*AnonymizationType, bool)`

GetAnonymizationOk returns a tuple with the Anonymization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymization

`func (o *ResGuestInfoType) SetAnonymization(v AnonymizationType)`

SetAnonymization sets Anonymization field to given value.

### HasAnonymization

`func (o *ResGuestInfoType) HasAnonymization() bool`

HasAnonymization returns a boolean if a field has been set.

### GetBirthDate

`func (o *ResGuestInfoType) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *ResGuestInfoType) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *ResGuestInfoType) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *ResGuestInfoType) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetEmail

`func (o *ResGuestInfoType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ResGuestInfoType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ResGuestInfoType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ResGuestInfoType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetFullName

`func (o *ResGuestInfoType) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *ResGuestInfoType) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *ResGuestInfoType) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *ResGuestInfoType) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetGivenName

`func (o *ResGuestInfoType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ResGuestInfoType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ResGuestInfoType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ResGuestInfoType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetGuestLastStayInformation

`func (o *ResGuestInfoType) GetGuestLastStayInformation() GuestLastStayInfoType`

GetGuestLastStayInformation returns the GuestLastStayInformation field if non-nil, zero value otherwise.

### GetGuestLastStayInformationOk

`func (o *ResGuestInfoType) GetGuestLastStayInformationOk() (*GuestLastStayInfoType, bool)`

GetGuestLastStayInformationOk returns a tuple with the GuestLastStayInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLastStayInformation

`func (o *ResGuestInfoType) SetGuestLastStayInformation(v GuestLastStayInfoType)`

SetGuestLastStayInformation sets GuestLastStayInformation field to given value.

### HasGuestLastStayInformation

`func (o *ResGuestInfoType) HasGuestLastStayInformation() bool`

HasGuestLastStayInformation returns a boolean if a field has been set.

### GetGuestRestricted

`func (o *ResGuestInfoType) GetGuestRestricted() bool`

GetGuestRestricted returns the GuestRestricted field if non-nil, zero value otherwise.

### GetGuestRestrictedOk

`func (o *ResGuestInfoType) GetGuestRestrictedOk() (*bool, bool)`

GetGuestRestrictedOk returns a tuple with the GuestRestricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRestricted

`func (o *ResGuestInfoType) SetGuestRestricted(v bool)`

SetGuestRestricted sets GuestRestricted field to given value.

### HasGuestRestricted

`func (o *ResGuestInfoType) HasGuestRestricted() bool`

HasGuestRestricted returns a boolean if a field has been set.

### GetGuestRestrictedCode

`func (o *ResGuestInfoType) GetGuestRestrictedCode() string`

GetGuestRestrictedCode returns the GuestRestrictedCode field if non-nil, zero value otherwise.

### GetGuestRestrictedCodeOk

`func (o *ResGuestInfoType) GetGuestRestrictedCodeOk() (*string, bool)`

GetGuestRestrictedCodeOk returns a tuple with the GuestRestrictedCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRestrictedCode

`func (o *ResGuestInfoType) SetGuestRestrictedCode(v string)`

SetGuestRestrictedCode sets GuestRestrictedCode field to given value.

### HasGuestRestrictedCode

`func (o *ResGuestInfoType) HasGuestRestrictedCode() bool`

HasGuestRestrictedCode returns a boolean if a field has been set.

### GetGuestRestrictedReasonDesc

`func (o *ResGuestInfoType) GetGuestRestrictedReasonDesc() string`

GetGuestRestrictedReasonDesc returns the GuestRestrictedReasonDesc field if non-nil, zero value otherwise.

### GetGuestRestrictedReasonDescOk

`func (o *ResGuestInfoType) GetGuestRestrictedReasonDescOk() (*string, bool)`

GetGuestRestrictedReasonDescOk returns a tuple with the GuestRestrictedReasonDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRestrictedReasonDesc

`func (o *ResGuestInfoType) SetGuestRestrictedReasonDesc(v string)`

SetGuestRestrictedReasonDesc sets GuestRestrictedReasonDesc field to given value.

### HasGuestRestrictedReasonDesc

`func (o *ResGuestInfoType) HasGuestRestrictedReasonDesc() bool`

HasGuestRestrictedReasonDesc returns a boolean if a field has been set.

### GetId

`func (o *ResGuestInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResGuestInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResGuestInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ResGuestInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLanguage

`func (o *ResGuestInfoType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ResGuestInfoType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ResGuestInfoType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ResGuestInfoType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetMembership

`func (o *ResGuestInfoType) GetMembership() MembershipInfoType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *ResGuestInfoType) GetMembershipOk() (*MembershipInfoType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *ResGuestInfoType) SetMembership(v MembershipInfoType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *ResGuestInfoType) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetMiddleName

`func (o *ResGuestInfoType) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ResGuestInfoType) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ResGuestInfoType) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ResGuestInfoType) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetNamePrefix

`func (o *ResGuestInfoType) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *ResGuestInfoType) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *ResGuestInfoType) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *ResGuestInfoType) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetNameTitle

`func (o *ResGuestInfoType) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *ResGuestInfoType) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *ResGuestInfoType) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *ResGuestInfoType) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetNameType

`func (o *ResGuestInfoType) GetNameType() NameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *ResGuestInfoType) GetNameTypeOk() (*NameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *ResGuestInfoType) SetNameType(v NameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *ResGuestInfoType) HasNameType() bool`

HasNameType returns a boolean if a field has been set.

### GetNationality

`func (o *ResGuestInfoType) GetNationality() CountryNameType`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *ResGuestInfoType) GetNationalityOk() (*CountryNameType, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *ResGuestInfoType) SetNationality(v CountryNameType)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *ResGuestInfoType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *ResGuestInfoType) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *ResGuestInfoType) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *ResGuestInfoType) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *ResGuestInfoType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetRegistrationCardNo

`func (o *ResGuestInfoType) GetRegistrationCardNo() string`

GetRegistrationCardNo returns the RegistrationCardNo field if non-nil, zero value otherwise.

### GetRegistrationCardNoOk

`func (o *ResGuestInfoType) GetRegistrationCardNoOk() (*string, bool)`

GetRegistrationCardNoOk returns a tuple with the RegistrationCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationCardNo

`func (o *ResGuestInfoType) SetRegistrationCardNo(v string)`

SetRegistrationCardNo sets RegistrationCardNo field to given value.

### HasRegistrationCardNo

`func (o *ResGuestInfoType) HasRegistrationCardNo() bool`

HasRegistrationCardNo returns a boolean if a field has been set.

### GetSurname

`func (o *ResGuestInfoType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *ResGuestInfoType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *ResGuestInfoType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *ResGuestInfoType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetType

`func (o *ResGuestInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResGuestInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResGuestInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ResGuestInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVip

`func (o *ResGuestInfoType) GetVip() VIPType`

GetVip returns the Vip field if non-nil, zero value otherwise.

### GetVipOk

`func (o *ResGuestInfoType) GetVipOk() (*VIPType, bool)`

GetVipOk returns a tuple with the Vip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVip

`func (o *ResGuestInfoType) SetVip(v VIPType)`

SetVip sets Vip field to given value.

### HasVip

`func (o *ResGuestInfoType) HasVip() bool`

HasVip returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



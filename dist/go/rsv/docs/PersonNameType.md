# PersonNameType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NamePrefix** | Pointer to **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names. | [optional] 
**MiddleName** | Pointer to **string** | The middle name of the person name. | [optional] 
**Surname** | Pointer to **string** | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. | [optional] 
**NameTitle** | Pointer to **string** | Degree or honors (e.g., Ph.D., M.D.) | [optional] 
**Salutation** | Pointer to **string** | Salutation of the profile | [optional] 
**NameType** | Pointer to [**PersonNameTypeType**](PersonNameTypeType.md) |  | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 

## Methods

### NewPersonNameType

`func NewPersonNameType() *PersonNameType`

NewPersonNameType instantiates a new PersonNameType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPersonNameTypeWithDefaults

`func NewPersonNameTypeWithDefaults() *PersonNameType`

NewPersonNameTypeWithDefaults instantiates a new PersonNameType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNamePrefix

`func (o *PersonNameType) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *PersonNameType) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *PersonNameType) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *PersonNameType) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetGivenName

`func (o *PersonNameType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *PersonNameType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *PersonNameType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *PersonNameType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetMiddleName

`func (o *PersonNameType) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *PersonNameType) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *PersonNameType) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *PersonNameType) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetSurname

`func (o *PersonNameType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *PersonNameType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *PersonNameType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *PersonNameType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetNameTitle

`func (o *PersonNameType) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *PersonNameType) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *PersonNameType) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *PersonNameType) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetSalutation

`func (o *PersonNameType) GetSalutation() string`

GetSalutation returns the Salutation field if non-nil, zero value otherwise.

### GetSalutationOk

`func (o *PersonNameType) GetSalutationOk() (*string, bool)`

GetSalutationOk returns a tuple with the Salutation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalutation

`func (o *PersonNameType) SetSalutation(v string)`

SetSalutation sets Salutation field to given value.

### HasSalutation

`func (o *PersonNameType) HasSalutation() bool`

HasSalutation returns a boolean if a field has been set.

### GetNameType

`func (o *PersonNameType) GetNameType() PersonNameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *PersonNameType) GetNameTypeOk() (*PersonNameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *PersonNameType) SetNameType(v PersonNameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *PersonNameType) HasNameType() bool`

HasNameType returns a boolean if a field has been set.

### GetLanguage

`func (o *PersonNameType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *PersonNameType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *PersonNameType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *PersonNameType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



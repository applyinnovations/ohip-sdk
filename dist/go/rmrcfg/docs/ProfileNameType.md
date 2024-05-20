# ProfileNameType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FullName** | Pointer to **string** | Full display Name. | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names. | [optional] 
**MiddleName** | Pointer to **string** | The middle name of the person name. | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**NamePrefix** | Pointer to **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | [optional] 
**NameTitle** | Pointer to **string** | Degree or honors (e.g., Ph.D., M.D.) | [optional] 
**NameType** | Pointer to [**PersonNameTypeType**](PersonNameTypeType.md) |  | [optional] 

## Methods

### NewProfileNameType

`func NewProfileNameType() *ProfileNameType`

NewProfileNameType instantiates a new ProfileNameType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileNameTypeWithDefaults

`func NewProfileNameTypeWithDefaults() *ProfileNameType`

NewProfileNameTypeWithDefaults instantiates a new ProfileNameType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFullName

`func (o *ProfileNameType) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *ProfileNameType) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *ProfileNameType) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *ProfileNameType) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetGivenName

`func (o *ProfileNameType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ProfileNameType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ProfileNameType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ProfileNameType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetMiddleName

`func (o *ProfileNameType) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ProfileNameType) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ProfileNameType) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ProfileNameType) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetName

`func (o *ProfileNameType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProfileNameType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProfileNameType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProfileNameType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNamePrefix

`func (o *ProfileNameType) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *ProfileNameType) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *ProfileNameType) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *ProfileNameType) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetNameTitle

`func (o *ProfileNameType) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *ProfileNameType) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *ProfileNameType) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *ProfileNameType) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetNameType

`func (o *ProfileNameType) GetNameType() PersonNameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *ProfileNameType) GetNameTypeOk() (*PersonNameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *ProfileNameType) SetNameType(v PersonNameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *ProfileNameType) HasNameType() bool`

HasNameType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



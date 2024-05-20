# ProfileSubscriptionTypeProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FullName** | Pointer to **string** | Full display Name. | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names. | [optional] 
**MiddleName** | Pointer to **string** | The middle name of the person name. | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**NamePrefix** | Pointer to **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | [optional] 
**NameSuffix** | Pointer to **string** | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) | [optional] 
**NameTitle** | Pointer to **string** | Degree or honors (e.g., Ph.D., M.D.) | [optional] 
**NameType** | Pointer to [**PersonNameTypeType**](PersonNameTypeType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 

## Methods

### NewProfileSubscriptionTypeProfileInfo

`func NewProfileSubscriptionTypeProfileInfo() *ProfileSubscriptionTypeProfileInfo`

NewProfileSubscriptionTypeProfileInfo instantiates a new ProfileSubscriptionTypeProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileSubscriptionTypeProfileInfoWithDefaults

`func NewProfileSubscriptionTypeProfileInfoWithDefaults() *ProfileSubscriptionTypeProfileInfo`

NewProfileSubscriptionTypeProfileInfoWithDefaults instantiates a new ProfileSubscriptionTypeProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFullName

`func (o *ProfileSubscriptionTypeProfileInfo) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *ProfileSubscriptionTypeProfileInfo) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *ProfileSubscriptionTypeProfileInfo) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetGivenName

`func (o *ProfileSubscriptionTypeProfileInfo) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ProfileSubscriptionTypeProfileInfo) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ProfileSubscriptionTypeProfileInfo) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetMiddleName

`func (o *ProfileSubscriptionTypeProfileInfo) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ProfileSubscriptionTypeProfileInfo) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ProfileSubscriptionTypeProfileInfo) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetName

`func (o *ProfileSubscriptionTypeProfileInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProfileSubscriptionTypeProfileInfo) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProfileSubscriptionTypeProfileInfo) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNamePrefix

`func (o *ProfileSubscriptionTypeProfileInfo) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *ProfileSubscriptionTypeProfileInfo) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *ProfileSubscriptionTypeProfileInfo) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetNameSuffix

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameSuffix() string`

GetNameSuffix returns the NameSuffix field if non-nil, zero value otherwise.

### GetNameSuffixOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameSuffixOk() (*string, bool)`

GetNameSuffixOk returns a tuple with the NameSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSuffix

`func (o *ProfileSubscriptionTypeProfileInfo) SetNameSuffix(v string)`

SetNameSuffix sets NameSuffix field to given value.

### HasNameSuffix

`func (o *ProfileSubscriptionTypeProfileInfo) HasNameSuffix() bool`

HasNameSuffix returns a boolean if a field has been set.

### GetNameTitle

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *ProfileSubscriptionTypeProfileInfo) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *ProfileSubscriptionTypeProfileInfo) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetNameType

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameType() PersonNameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetNameTypeOk() (*PersonNameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *ProfileSubscriptionTypeProfileInfo) SetNameType(v PersonNameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *ProfileSubscriptionTypeProfileInfo) HasNameType() bool`

HasNameType returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileSubscriptionTypeProfileInfo) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileSubscriptionTypeProfileInfo) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileSubscriptionTypeProfileInfo) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileSubscriptionTypeProfileInfo) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



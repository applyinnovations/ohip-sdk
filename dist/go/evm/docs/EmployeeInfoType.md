# EmployeeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressInfo** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 
**Department** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**EmailInfo** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**GenderCode** | Pointer to **string** | Identifies the profile gender code based from configured gender list of values. | [optional] 
**PersonName** | Pointer to [**PersonNameType**](PersonNameType.md) |  | [optional] 
**PhoneInfo** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewEmployeeInfoType

`func NewEmployeeInfoType() *EmployeeInfoType`

NewEmployeeInfoType instantiates a new EmployeeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmployeeInfoTypeWithDefaults

`func NewEmployeeInfoTypeWithDefaults() *EmployeeInfoType`

NewEmployeeInfoTypeWithDefaults instantiates a new EmployeeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressInfo

`func (o *EmployeeInfoType) GetAddressInfo() AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *EmployeeInfoType) GetAddressInfoOk() (*AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *EmployeeInfoType) SetAddressInfo(v AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *EmployeeInfoType) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetBirthDate

`func (o *EmployeeInfoType) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *EmployeeInfoType) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *EmployeeInfoType) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *EmployeeInfoType) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetBirthDateMasked

`func (o *EmployeeInfoType) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *EmployeeInfoType) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *EmployeeInfoType) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *EmployeeInfoType) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.

### GetDepartment

`func (o *EmployeeInfoType) GetDepartment() CodeDescriptionType`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *EmployeeInfoType) GetDepartmentOk() (*CodeDescriptionType, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *EmployeeInfoType) SetDepartment(v CodeDescriptionType)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *EmployeeInfoType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetEmailInfo

`func (o *EmployeeInfoType) GetEmailInfo() EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *EmployeeInfoType) GetEmailInfoOk() (*EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *EmployeeInfoType) SetEmailInfo(v EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *EmployeeInfoType) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetGender

`func (o *EmployeeInfoType) GetGender() string`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *EmployeeInfoType) GetGenderOk() (*string, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *EmployeeInfoType) SetGender(v string)`

SetGender sets Gender field to given value.

### HasGender

`func (o *EmployeeInfoType) HasGender() bool`

HasGender returns a boolean if a field has been set.

### GetGenderCode

`func (o *EmployeeInfoType) GetGenderCode() string`

GetGenderCode returns the GenderCode field if non-nil, zero value otherwise.

### GetGenderCodeOk

`func (o *EmployeeInfoType) GetGenderCodeOk() (*string, bool)`

GetGenderCodeOk returns a tuple with the GenderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenderCode

`func (o *EmployeeInfoType) SetGenderCode(v string)`

SetGenderCode sets GenderCode field to given value.

### HasGenderCode

`func (o *EmployeeInfoType) HasGenderCode() bool`

HasGenderCode returns a boolean if a field has been set.

### GetPersonName

`func (o *EmployeeInfoType) GetPersonName() PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *EmployeeInfoType) GetPersonNameOk() (*PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *EmployeeInfoType) SetPersonName(v PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *EmployeeInfoType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.

### GetPhoneInfo

`func (o *EmployeeInfoType) GetPhoneInfo() TelephoneInfoType`

GetPhoneInfo returns the PhoneInfo field if non-nil, zero value otherwise.

### GetPhoneInfoOk

`func (o *EmployeeInfoType) GetPhoneInfoOk() (*TelephoneInfoType, bool)`

GetPhoneInfoOk returns a tuple with the PhoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneInfo

`func (o *EmployeeInfoType) SetPhoneInfo(v TelephoneInfoType)`

SetPhoneInfo sets PhoneInfo field to given value.

### HasPhoneInfo

`func (o *EmployeeInfoType) HasPhoneInfo() bool`

HasPhoneInfo returns a boolean if a field has been set.

### GetProfileId

`func (o *EmployeeInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *EmployeeInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *EmployeeInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *EmployeeInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AccountTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountTypes** | Pointer to [**[]AccountTypeType**](AccountTypeType.md) | List of Account Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountTypesDetails

`func NewAccountTypesDetails() *AccountTypesDetails`

NewAccountTypesDetails instantiates a new AccountTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountTypesDetailsWithDefaults

`func NewAccountTypesDetailsWithDefaults() *AccountTypesDetails`

NewAccountTypesDetailsWithDefaults instantiates a new AccountTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountTypes

`func (o *AccountTypesDetails) GetAccountTypes() []AccountTypeType`

GetAccountTypes returns the AccountTypes field if non-nil, zero value otherwise.

### GetAccountTypesOk

`func (o *AccountTypesDetails) GetAccountTypesOk() (*[]AccountTypeType, bool)`

GetAccountTypesOk returns a tuple with the AccountTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypes

`func (o *AccountTypesDetails) SetAccountTypes(v []AccountTypeType)`

SetAccountTypes sets AccountTypes field to given value.

### HasAccountTypes

`func (o *AccountTypesDetails) HasAccountTypes() bool`

HasAccountTypes returns a boolean if a field has been set.

### GetLinks

`func (o *AccountTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



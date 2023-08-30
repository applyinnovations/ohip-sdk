# PostAccountTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountTypes** | Pointer to [**[]AccountTypeType**](AccountTypeType.md) | List of Account Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAccountTypesRequest

`func NewPostAccountTypesRequest() *PostAccountTypesRequest`

NewPostAccountTypesRequest instantiates a new PostAccountTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAccountTypesRequestWithDefaults

`func NewPostAccountTypesRequestWithDefaults() *PostAccountTypesRequest`

NewPostAccountTypesRequestWithDefaults instantiates a new PostAccountTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountTypes

`func (o *PostAccountTypesRequest) GetAccountTypes() []AccountTypeType`

GetAccountTypes returns the AccountTypes field if non-nil, zero value otherwise.

### GetAccountTypesOk

`func (o *PostAccountTypesRequest) GetAccountTypesOk() (*[]AccountTypeType, bool)`

GetAccountTypesOk returns a tuple with the AccountTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypes

`func (o *PostAccountTypesRequest) SetAccountTypes(v []AccountTypeType)`

SetAccountTypes sets AccountTypes field to given value.

### HasAccountTypes

`func (o *PostAccountTypesRequest) HasAccountTypes() bool`

HasAccountTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostAccountTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAccountTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAccountTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAccountTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAccountTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAccountTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAccountTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAccountTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



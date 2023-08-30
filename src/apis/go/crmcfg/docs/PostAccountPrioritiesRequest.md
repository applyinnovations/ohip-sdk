# PostAccountPrioritiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountPriorities** | Pointer to [**[]AccountPriorityType**](AccountPriorityType.md) | List of Account Priorities. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAccountPrioritiesRequest

`func NewPostAccountPrioritiesRequest() *PostAccountPrioritiesRequest`

NewPostAccountPrioritiesRequest instantiates a new PostAccountPrioritiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAccountPrioritiesRequestWithDefaults

`func NewPostAccountPrioritiesRequestWithDefaults() *PostAccountPrioritiesRequest`

NewPostAccountPrioritiesRequestWithDefaults instantiates a new PostAccountPrioritiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountPriorities

`func (o *PostAccountPrioritiesRequest) GetAccountPriorities() []AccountPriorityType`

GetAccountPriorities returns the AccountPriorities field if non-nil, zero value otherwise.

### GetAccountPrioritiesOk

`func (o *PostAccountPrioritiesRequest) GetAccountPrioritiesOk() (*[]AccountPriorityType, bool)`

GetAccountPrioritiesOk returns a tuple with the AccountPriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountPriorities

`func (o *PostAccountPrioritiesRequest) SetAccountPriorities(v []AccountPriorityType)`

SetAccountPriorities sets AccountPriorities field to given value.

### HasAccountPriorities

`func (o *PostAccountPrioritiesRequest) HasAccountPriorities() bool`

HasAccountPriorities returns a boolean if a field has been set.

### GetLinks

`func (o *PostAccountPrioritiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAccountPrioritiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAccountPrioritiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAccountPrioritiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAccountPrioritiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAccountPrioritiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAccountPrioritiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAccountPrioritiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



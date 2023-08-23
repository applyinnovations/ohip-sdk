# PostBlockOwnersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**SetBlockOwnersType**](SetBlockOwnersType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBlockOwnersRequest

`func NewPostBlockOwnersRequest() *PostBlockOwnersRequest`

NewPostBlockOwnersRequest instantiates a new PostBlockOwnersRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockOwnersRequestWithDefaults

`func NewPostBlockOwnersRequestWithDefaults() *PostBlockOwnersRequest`

NewPostBlockOwnersRequestWithDefaults instantiates a new PostBlockOwnersRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostBlockOwnersRequest) GetCriteria() SetBlockOwnersType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostBlockOwnersRequest) GetCriteriaOk() (*SetBlockOwnersType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostBlockOwnersRequest) SetCriteria(v SetBlockOwnersType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostBlockOwnersRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockOwnersRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockOwnersRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockOwnersRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockOwnersRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockOwnersRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockOwnersRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockOwnersRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockOwnersRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



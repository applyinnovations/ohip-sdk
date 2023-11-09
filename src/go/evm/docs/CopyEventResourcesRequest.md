# CopyEventResourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CopyAndMoveEventResourcesType**](CopyAndMoveEventResourcesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyEventResourcesRequest

`func NewCopyEventResourcesRequest() *CopyEventResourcesRequest`

NewCopyEventResourcesRequest instantiates a new CopyEventResourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyEventResourcesRequestWithDefaults

`func NewCopyEventResourcesRequestWithDefaults() *CopyEventResourcesRequest`

NewCopyEventResourcesRequestWithDefaults instantiates a new CopyEventResourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *CopyEventResourcesRequest) GetCriteria() CopyAndMoveEventResourcesType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *CopyEventResourcesRequest) GetCriteriaOk() (*CopyAndMoveEventResourcesType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *CopyEventResourcesRequest) SetCriteria(v CopyAndMoveEventResourcesType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *CopyEventResourcesRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyEventResourcesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyEventResourcesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyEventResourcesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyEventResourcesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



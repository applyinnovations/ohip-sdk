# PutPromotionGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PromotionGroup** | Pointer to [**PromotionGroupType**](PromotionGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutPromotionGroupRequest

`func NewPutPromotionGroupRequest() *PutPromotionGroupRequest`

NewPutPromotionGroupRequest instantiates a new PutPromotionGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPromotionGroupRequestWithDefaults

`func NewPutPromotionGroupRequestWithDefaults() *PutPromotionGroupRequest`

NewPutPromotionGroupRequestWithDefaults instantiates a new PutPromotionGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPromotionGroupRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPromotionGroupRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPromotionGroupRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPromotionGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPromotionGroup

`func (o *PutPromotionGroupRequest) GetPromotionGroup() PromotionGroupType`

GetPromotionGroup returns the PromotionGroup field if non-nil, zero value otherwise.

### GetPromotionGroupOk

`func (o *PutPromotionGroupRequest) GetPromotionGroupOk() (*PromotionGroupType, bool)`

GetPromotionGroupOk returns a tuple with the PromotionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroup

`func (o *PutPromotionGroupRequest) SetPromotionGroup(v PromotionGroupType)`

SetPromotionGroup sets PromotionGroup field to given value.

### HasPromotionGroup

`func (o *PutPromotionGroupRequest) HasPromotionGroup() bool`

HasPromotionGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPromotionGroupRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPromotionGroupRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPromotionGroupRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPromotionGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



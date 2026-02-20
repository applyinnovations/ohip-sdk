# CopyPromotionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Targets** | Pointer to [**[]CopyPromotionGroupTypeTargetsInner**](CopyPromotionGroupTypeTargetsInner.md) | The details of Promotion Groups targets, where it is being copied and with what name. | [optional] 
**PromotionGroup** | Pointer to **string** | Promotion Group being copied. | [optional] 

## Methods

### NewCopyPromotionGroupType

`func NewCopyPromotionGroupType() *CopyPromotionGroupType`

NewCopyPromotionGroupType instantiates a new CopyPromotionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyPromotionGroupTypeWithDefaults

`func NewCopyPromotionGroupTypeWithDefaults() *CopyPromotionGroupType`

NewCopyPromotionGroupTypeWithDefaults instantiates a new CopyPromotionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargets

`func (o *CopyPromotionGroupType) GetTargets() []CopyPromotionGroupTypeTargetsInner`

GetTargets returns the Targets field if non-nil, zero value otherwise.

### GetTargetsOk

`func (o *CopyPromotionGroupType) GetTargetsOk() (*[]CopyPromotionGroupTypeTargetsInner, bool)`

GetTargetsOk returns a tuple with the Targets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargets

`func (o *CopyPromotionGroupType) SetTargets(v []CopyPromotionGroupTypeTargetsInner)`

SetTargets sets Targets field to given value.

### HasTargets

`func (o *CopyPromotionGroupType) HasTargets() bool`

HasTargets returns a boolean if a field has been set.

### GetPromotionGroup

`func (o *CopyPromotionGroupType) GetPromotionGroup() string`

GetPromotionGroup returns the PromotionGroup field if non-nil, zero value otherwise.

### GetPromotionGroupOk

`func (o *CopyPromotionGroupType) GetPromotionGroupOk() (*string, bool)`

GetPromotionGroupOk returns a tuple with the PromotionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroup

`func (o *CopyPromotionGroupType) SetPromotionGroup(v string)`

SetPromotionGroup sets PromotionGroup field to given value.

### HasPromotionGroup

`func (o *CopyPromotionGroupType) HasPromotionGroup() bool`

HasPromotionGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CopyRatePlanType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanCode** | Pointer to **string** | Rate plan code being copied. | [optional] 
**Targets** | Pointer to [**[]CopyRatePlanTypeTargetsInner**](CopyRatePlanTypeTargetsInner.md) | The details of Rate plan targets, where it is being copied and with what name. | [optional] 

## Methods

### NewCopyRatePlanType

`func NewCopyRatePlanType() *CopyRatePlanType`

NewCopyRatePlanType instantiates a new CopyRatePlanType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRatePlanTypeWithDefaults

`func NewCopyRatePlanTypeWithDefaults() *CopyRatePlanType`

NewCopyRatePlanTypeWithDefaults instantiates a new CopyRatePlanType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanCode

`func (o *CopyRatePlanType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *CopyRatePlanType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *CopyRatePlanType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *CopyRatePlanType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetTargets

`func (o *CopyRatePlanType) GetTargets() []CopyRatePlanTypeTargetsInner`

GetTargets returns the Targets field if non-nil, zero value otherwise.

### GetTargetsOk

`func (o *CopyRatePlanType) GetTargetsOk() (*[]CopyRatePlanTypeTargetsInner, bool)`

GetTargetsOk returns a tuple with the Targets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargets

`func (o *CopyRatePlanType) SetTargets(v []CopyRatePlanTypeTargetsInner)`

SetTargets sets Targets field to given value.

### HasTargets

`func (o *CopyRatePlanType) HasTargets() bool`

HasTargets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



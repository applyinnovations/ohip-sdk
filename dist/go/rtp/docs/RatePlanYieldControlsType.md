# RatePlanYieldControlsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateBucket** | Pointer to **string** | The rate bucket the rate plan code belongs to. | [optional] 
**YieldAsRatePlanCode** | Pointer to **string** | This rate plan code is to be yielded as Yield as Rate Plan Code (if any). | [optional] 
**YieldMarketCodeList** | Pointer to **[]string** | Yield Market Code for the rate plan code. | [optional] 
**Yieldable** | Pointer to [**RatePlanYieldableType**](RatePlanYieldableType.md) |  | [optional] 

## Methods

### NewRatePlanYieldControlsType

`func NewRatePlanYieldControlsType() *RatePlanYieldControlsType`

NewRatePlanYieldControlsType instantiates a new RatePlanYieldControlsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanYieldControlsTypeWithDefaults

`func NewRatePlanYieldControlsTypeWithDefaults() *RatePlanYieldControlsType`

NewRatePlanYieldControlsTypeWithDefaults instantiates a new RatePlanYieldControlsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateBucket

`func (o *RatePlanYieldControlsType) GetRateBucket() string`

GetRateBucket returns the RateBucket field if non-nil, zero value otherwise.

### GetRateBucketOk

`func (o *RatePlanYieldControlsType) GetRateBucketOk() (*string, bool)`

GetRateBucketOk returns a tuple with the RateBucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateBucket

`func (o *RatePlanYieldControlsType) SetRateBucket(v string)`

SetRateBucket sets RateBucket field to given value.

### HasRateBucket

`func (o *RatePlanYieldControlsType) HasRateBucket() bool`

HasRateBucket returns a boolean if a field has been set.

### GetYieldAsRatePlanCode

`func (o *RatePlanYieldControlsType) GetYieldAsRatePlanCode() string`

GetYieldAsRatePlanCode returns the YieldAsRatePlanCode field if non-nil, zero value otherwise.

### GetYieldAsRatePlanCodeOk

`func (o *RatePlanYieldControlsType) GetYieldAsRatePlanCodeOk() (*string, bool)`

GetYieldAsRatePlanCodeOk returns a tuple with the YieldAsRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAsRatePlanCode

`func (o *RatePlanYieldControlsType) SetYieldAsRatePlanCode(v string)`

SetYieldAsRatePlanCode sets YieldAsRatePlanCode field to given value.

### HasYieldAsRatePlanCode

`func (o *RatePlanYieldControlsType) HasYieldAsRatePlanCode() bool`

HasYieldAsRatePlanCode returns a boolean if a field has been set.

### GetYieldMarketCodeList

`func (o *RatePlanYieldControlsType) GetYieldMarketCodeList() []string`

GetYieldMarketCodeList returns the YieldMarketCodeList field if non-nil, zero value otherwise.

### GetYieldMarketCodeListOk

`func (o *RatePlanYieldControlsType) GetYieldMarketCodeListOk() (*[]string, bool)`

GetYieldMarketCodeListOk returns a tuple with the YieldMarketCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldMarketCodeList

`func (o *RatePlanYieldControlsType) SetYieldMarketCodeList(v []string)`

SetYieldMarketCodeList sets YieldMarketCodeList field to given value.

### HasYieldMarketCodeList

`func (o *RatePlanYieldControlsType) HasYieldMarketCodeList() bool`

HasYieldMarketCodeList returns a boolean if a field has been set.

### GetYieldable

`func (o *RatePlanYieldControlsType) GetYieldable() RatePlanYieldableType`

GetYieldable returns the Yieldable field if non-nil, zero value otherwise.

### GetYieldableOk

`func (o *RatePlanYieldControlsType) GetYieldableOk() (*RatePlanYieldableType, bool)`

GetYieldableOk returns a tuple with the Yieldable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldable

`func (o *RatePlanYieldControlsType) SetYieldable(v RatePlanYieldableType)`

SetYieldable sets Yieldable field to given value.

### HasYieldable

`func (o *RatePlanYieldControlsType) HasYieldable() bool`

HasYieldable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



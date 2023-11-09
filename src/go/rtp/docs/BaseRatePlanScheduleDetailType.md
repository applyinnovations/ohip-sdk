# BaseRatePlanScheduleDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentDetails** | Pointer to [**ScheduleAdjustmentDetailsType**](ScheduleAdjustmentDetailsType.md) |  | [optional] 
**AdvancedBaseRateOffset** | Pointer to [**AdvancedBaseRateOffsetType**](AdvancedBaseRateOffsetType.md) |  | [optional] 
**Classifications** | Pointer to [**RatePlanScheduleClassificationsType**](RatePlanScheduleClassificationsType.md) |  | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**OccupantThresholdPricing** | Pointer to [**OccupantThresholdPricingType**](OccupantThresholdPricingType.md) |  | [optional] 
**RateAmountBoundaries** | Pointer to [**RateAmountBoundariesType**](RateAmountBoundariesType.md) |  | [optional] 
**RateAmounts** | Pointer to [**ScheduleRateAmountsType**](ScheduleRateAmountsType.md) |  | [optional] 
**RateSchedulePackages** | Pointer to [**RatePackagesType**](RatePackagesType.md) |  | [optional] 
**SeasonCode** | Pointer to **string** | Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**TierID** | Pointer to **int32** |  | [optional] 

## Methods

### NewBaseRatePlanScheduleDetailType

`func NewBaseRatePlanScheduleDetailType() *BaseRatePlanScheduleDetailType`

NewBaseRatePlanScheduleDetailType instantiates a new BaseRatePlanScheduleDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseRatePlanScheduleDetailTypeWithDefaults

`func NewBaseRatePlanScheduleDetailTypeWithDefaults() *BaseRatePlanScheduleDetailType`

NewBaseRatePlanScheduleDetailTypeWithDefaults instantiates a new BaseRatePlanScheduleDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentDetails

`func (o *BaseRatePlanScheduleDetailType) GetAdjustmentDetails() ScheduleAdjustmentDetailsType`

GetAdjustmentDetails returns the AdjustmentDetails field if non-nil, zero value otherwise.

### GetAdjustmentDetailsOk

`func (o *BaseRatePlanScheduleDetailType) GetAdjustmentDetailsOk() (*ScheduleAdjustmentDetailsType, bool)`

GetAdjustmentDetailsOk returns a tuple with the AdjustmentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentDetails

`func (o *BaseRatePlanScheduleDetailType) SetAdjustmentDetails(v ScheduleAdjustmentDetailsType)`

SetAdjustmentDetails sets AdjustmentDetails field to given value.

### HasAdjustmentDetails

`func (o *BaseRatePlanScheduleDetailType) HasAdjustmentDetails() bool`

HasAdjustmentDetails returns a boolean if a field has been set.

### GetAdvancedBaseRateOffset

`func (o *BaseRatePlanScheduleDetailType) GetAdvancedBaseRateOffset() AdvancedBaseRateOffsetType`

GetAdvancedBaseRateOffset returns the AdvancedBaseRateOffset field if non-nil, zero value otherwise.

### GetAdvancedBaseRateOffsetOk

`func (o *BaseRatePlanScheduleDetailType) GetAdvancedBaseRateOffsetOk() (*AdvancedBaseRateOffsetType, bool)`

GetAdvancedBaseRateOffsetOk returns a tuple with the AdvancedBaseRateOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedBaseRateOffset

`func (o *BaseRatePlanScheduleDetailType) SetAdvancedBaseRateOffset(v AdvancedBaseRateOffsetType)`

SetAdvancedBaseRateOffset sets AdvancedBaseRateOffset field to given value.

### HasAdvancedBaseRateOffset

`func (o *BaseRatePlanScheduleDetailType) HasAdvancedBaseRateOffset() bool`

HasAdvancedBaseRateOffset returns a boolean if a field has been set.

### GetClassifications

`func (o *BaseRatePlanScheduleDetailType) GetClassifications() RatePlanScheduleClassificationsType`

GetClassifications returns the Classifications field if non-nil, zero value otherwise.

### GetClassificationsOk

`func (o *BaseRatePlanScheduleDetailType) GetClassificationsOk() (*RatePlanScheduleClassificationsType, bool)`

GetClassificationsOk returns a tuple with the Classifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassifications

`func (o *BaseRatePlanScheduleDetailType) SetClassifications(v RatePlanScheduleClassificationsType)`

SetClassifications sets Classifications field to given value.

### HasClassifications

`func (o *BaseRatePlanScheduleDetailType) HasClassifications() bool`

HasClassifications returns a boolean if a field has been set.

### GetEnd

`func (o *BaseRatePlanScheduleDetailType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *BaseRatePlanScheduleDetailType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *BaseRatePlanScheduleDetailType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *BaseRatePlanScheduleDetailType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetOccupantThresholdPricing

`func (o *BaseRatePlanScheduleDetailType) GetOccupantThresholdPricing() OccupantThresholdPricingType`

GetOccupantThresholdPricing returns the OccupantThresholdPricing field if non-nil, zero value otherwise.

### GetOccupantThresholdPricingOk

`func (o *BaseRatePlanScheduleDetailType) GetOccupantThresholdPricingOk() (*OccupantThresholdPricingType, bool)`

GetOccupantThresholdPricingOk returns a tuple with the OccupantThresholdPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupantThresholdPricing

`func (o *BaseRatePlanScheduleDetailType) SetOccupantThresholdPricing(v OccupantThresholdPricingType)`

SetOccupantThresholdPricing sets OccupantThresholdPricing field to given value.

### HasOccupantThresholdPricing

`func (o *BaseRatePlanScheduleDetailType) HasOccupantThresholdPricing() bool`

HasOccupantThresholdPricing returns a boolean if a field has been set.

### GetRateAmountBoundaries

`func (o *BaseRatePlanScheduleDetailType) GetRateAmountBoundaries() RateAmountBoundariesType`

GetRateAmountBoundaries returns the RateAmountBoundaries field if non-nil, zero value otherwise.

### GetRateAmountBoundariesOk

`func (o *BaseRatePlanScheduleDetailType) GetRateAmountBoundariesOk() (*RateAmountBoundariesType, bool)`

GetRateAmountBoundariesOk returns a tuple with the RateAmountBoundaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmountBoundaries

`func (o *BaseRatePlanScheduleDetailType) SetRateAmountBoundaries(v RateAmountBoundariesType)`

SetRateAmountBoundaries sets RateAmountBoundaries field to given value.

### HasRateAmountBoundaries

`func (o *BaseRatePlanScheduleDetailType) HasRateAmountBoundaries() bool`

HasRateAmountBoundaries returns a boolean if a field has been set.

### GetRateAmounts

`func (o *BaseRatePlanScheduleDetailType) GetRateAmounts() ScheduleRateAmountsType`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *BaseRatePlanScheduleDetailType) GetRateAmountsOk() (*ScheduleRateAmountsType, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *BaseRatePlanScheduleDetailType) SetRateAmounts(v ScheduleRateAmountsType)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *BaseRatePlanScheduleDetailType) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRateSchedulePackages

`func (o *BaseRatePlanScheduleDetailType) GetRateSchedulePackages() RatePackagesType`

GetRateSchedulePackages returns the RateSchedulePackages field if non-nil, zero value otherwise.

### GetRateSchedulePackagesOk

`func (o *BaseRatePlanScheduleDetailType) GetRateSchedulePackagesOk() (*RatePackagesType, bool)`

GetRateSchedulePackagesOk returns a tuple with the RateSchedulePackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSchedulePackages

`func (o *BaseRatePlanScheduleDetailType) SetRateSchedulePackages(v RatePackagesType)`

SetRateSchedulePackages sets RateSchedulePackages field to given value.

### HasRateSchedulePackages

`func (o *BaseRatePlanScheduleDetailType) HasRateSchedulePackages() bool`

HasRateSchedulePackages returns a boolean if a field has been set.

### GetSeasonCode

`func (o *BaseRatePlanScheduleDetailType) GetSeasonCode() string`

GetSeasonCode returns the SeasonCode field if non-nil, zero value otherwise.

### GetSeasonCodeOk

`func (o *BaseRatePlanScheduleDetailType) GetSeasonCodeOk() (*string, bool)`

GetSeasonCodeOk returns a tuple with the SeasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonCode

`func (o *BaseRatePlanScheduleDetailType) SetSeasonCode(v string)`

SetSeasonCode sets SeasonCode field to given value.

### HasSeasonCode

`func (o *BaseRatePlanScheduleDetailType) HasSeasonCode() bool`

HasSeasonCode returns a boolean if a field has been set.

### GetStart

`func (o *BaseRatePlanScheduleDetailType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *BaseRatePlanScheduleDetailType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *BaseRatePlanScheduleDetailType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *BaseRatePlanScheduleDetailType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetTierID

`func (o *BaseRatePlanScheduleDetailType) GetTierID() int32`

GetTierID returns the TierID field if non-nil, zero value otherwise.

### GetTierIDOk

`func (o *BaseRatePlanScheduleDetailType) GetTierIDOk() (*int32, bool)`

GetTierIDOk returns a tuple with the TierID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierID

`func (o *BaseRatePlanScheduleDetailType) SetTierID(v int32)`

SetTierID sets TierID field to given value.

### HasTierID

`func (o *BaseRatePlanScheduleDetailType) HasTierID() bool`

HasTierID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RatePlanScheduleDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentDetails** | Pointer to [**ScheduleAdjustmentDetailsType**](ScheduleAdjustmentDetailsType.md) |  | [optional] 
**AdvancedBaseRateOffset** | Pointer to [**AdvancedBaseRateOffsetType**](AdvancedBaseRateOffsetType.md) |  | [optional] 
**AdvancedDailyBaseRatePlanCode** | Pointer to **string** | The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code | [optional] 
**Classifications** | Pointer to [**RatePlanScheduleClassificationsType**](RatePlanScheduleClassificationsType.md) |  | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**OccupantThresholdPricing** | Pointer to [**OccupantThresholdPricingType**](OccupantThresholdPricingType.md) |  | [optional] 
**RateAmountBoundaries** | Pointer to [**RateAmountBoundariesType**](RateAmountBoundariesType.md) |  | [optional] 
**RateAmounts** | Pointer to [**ScheduleRateAmountsType**](ScheduleRateAmountsType.md) |  | [optional] 
**RateSchedulePackages** | Pointer to [**RatePackagesType**](RatePackagesType.md) |  | [optional] 
**RoomTypeList** | Pointer to [**RoomTypeListType**](RoomTypeListType.md) |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**SeasonCode** | Pointer to **string** | Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**TierID** | Pointer to **int32** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 

## Methods

### NewRatePlanScheduleDetailType

`func NewRatePlanScheduleDetailType() *RatePlanScheduleDetailType`

NewRatePlanScheduleDetailType instantiates a new RatePlanScheduleDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanScheduleDetailTypeWithDefaults

`func NewRatePlanScheduleDetailTypeWithDefaults() *RatePlanScheduleDetailType`

NewRatePlanScheduleDetailTypeWithDefaults instantiates a new RatePlanScheduleDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentDetails

`func (o *RatePlanScheduleDetailType) GetAdjustmentDetails() ScheduleAdjustmentDetailsType`

GetAdjustmentDetails returns the AdjustmentDetails field if non-nil, zero value otherwise.

### GetAdjustmentDetailsOk

`func (o *RatePlanScheduleDetailType) GetAdjustmentDetailsOk() (*ScheduleAdjustmentDetailsType, bool)`

GetAdjustmentDetailsOk returns a tuple with the AdjustmentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentDetails

`func (o *RatePlanScheduleDetailType) SetAdjustmentDetails(v ScheduleAdjustmentDetailsType)`

SetAdjustmentDetails sets AdjustmentDetails field to given value.

### HasAdjustmentDetails

`func (o *RatePlanScheduleDetailType) HasAdjustmentDetails() bool`

HasAdjustmentDetails returns a boolean if a field has been set.

### GetAdvancedBaseRateOffset

`func (o *RatePlanScheduleDetailType) GetAdvancedBaseRateOffset() AdvancedBaseRateOffsetType`

GetAdvancedBaseRateOffset returns the AdvancedBaseRateOffset field if non-nil, zero value otherwise.

### GetAdvancedBaseRateOffsetOk

`func (o *RatePlanScheduleDetailType) GetAdvancedBaseRateOffsetOk() (*AdvancedBaseRateOffsetType, bool)`

GetAdvancedBaseRateOffsetOk returns a tuple with the AdvancedBaseRateOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedBaseRateOffset

`func (o *RatePlanScheduleDetailType) SetAdvancedBaseRateOffset(v AdvancedBaseRateOffsetType)`

SetAdvancedBaseRateOffset sets AdvancedBaseRateOffset field to given value.

### HasAdvancedBaseRateOffset

`func (o *RatePlanScheduleDetailType) HasAdvancedBaseRateOffset() bool`

HasAdvancedBaseRateOffset returns a boolean if a field has been set.

### GetAdvancedDailyBaseRatePlanCode

`func (o *RatePlanScheduleDetailType) GetAdvancedDailyBaseRatePlanCode() string`

GetAdvancedDailyBaseRatePlanCode returns the AdvancedDailyBaseRatePlanCode field if non-nil, zero value otherwise.

### GetAdvancedDailyBaseRatePlanCodeOk

`func (o *RatePlanScheduleDetailType) GetAdvancedDailyBaseRatePlanCodeOk() (*string, bool)`

GetAdvancedDailyBaseRatePlanCodeOk returns a tuple with the AdvancedDailyBaseRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyBaseRatePlanCode

`func (o *RatePlanScheduleDetailType) SetAdvancedDailyBaseRatePlanCode(v string)`

SetAdvancedDailyBaseRatePlanCode sets AdvancedDailyBaseRatePlanCode field to given value.

### HasAdvancedDailyBaseRatePlanCode

`func (o *RatePlanScheduleDetailType) HasAdvancedDailyBaseRatePlanCode() bool`

HasAdvancedDailyBaseRatePlanCode returns a boolean if a field has been set.

### GetClassifications

`func (o *RatePlanScheduleDetailType) GetClassifications() RatePlanScheduleClassificationsType`

GetClassifications returns the Classifications field if non-nil, zero value otherwise.

### GetClassificationsOk

`func (o *RatePlanScheduleDetailType) GetClassificationsOk() (*RatePlanScheduleClassificationsType, bool)`

GetClassificationsOk returns a tuple with the Classifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassifications

`func (o *RatePlanScheduleDetailType) SetClassifications(v RatePlanScheduleClassificationsType)`

SetClassifications sets Classifications field to given value.

### HasClassifications

`func (o *RatePlanScheduleDetailType) HasClassifications() bool`

HasClassifications returns a boolean if a field has been set.

### GetEnd

`func (o *RatePlanScheduleDetailType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RatePlanScheduleDetailType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RatePlanScheduleDetailType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RatePlanScheduleDetailType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFriday

`func (o *RatePlanScheduleDetailType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *RatePlanScheduleDetailType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *RatePlanScheduleDetailType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *RatePlanScheduleDetailType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetMonday

`func (o *RatePlanScheduleDetailType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *RatePlanScheduleDetailType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *RatePlanScheduleDetailType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *RatePlanScheduleDetailType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetOccupantThresholdPricing

`func (o *RatePlanScheduleDetailType) GetOccupantThresholdPricing() OccupantThresholdPricingType`

GetOccupantThresholdPricing returns the OccupantThresholdPricing field if non-nil, zero value otherwise.

### GetOccupantThresholdPricingOk

`func (o *RatePlanScheduleDetailType) GetOccupantThresholdPricingOk() (*OccupantThresholdPricingType, bool)`

GetOccupantThresholdPricingOk returns a tuple with the OccupantThresholdPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupantThresholdPricing

`func (o *RatePlanScheduleDetailType) SetOccupantThresholdPricing(v OccupantThresholdPricingType)`

SetOccupantThresholdPricing sets OccupantThresholdPricing field to given value.

### HasOccupantThresholdPricing

`func (o *RatePlanScheduleDetailType) HasOccupantThresholdPricing() bool`

HasOccupantThresholdPricing returns a boolean if a field has been set.

### GetRateAmountBoundaries

`func (o *RatePlanScheduleDetailType) GetRateAmountBoundaries() RateAmountBoundariesType`

GetRateAmountBoundaries returns the RateAmountBoundaries field if non-nil, zero value otherwise.

### GetRateAmountBoundariesOk

`func (o *RatePlanScheduleDetailType) GetRateAmountBoundariesOk() (*RateAmountBoundariesType, bool)`

GetRateAmountBoundariesOk returns a tuple with the RateAmountBoundaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmountBoundaries

`func (o *RatePlanScheduleDetailType) SetRateAmountBoundaries(v RateAmountBoundariesType)`

SetRateAmountBoundaries sets RateAmountBoundaries field to given value.

### HasRateAmountBoundaries

`func (o *RatePlanScheduleDetailType) HasRateAmountBoundaries() bool`

HasRateAmountBoundaries returns a boolean if a field has been set.

### GetRateAmounts

`func (o *RatePlanScheduleDetailType) GetRateAmounts() ScheduleRateAmountsType`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *RatePlanScheduleDetailType) GetRateAmountsOk() (*ScheduleRateAmountsType, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *RatePlanScheduleDetailType) SetRateAmounts(v ScheduleRateAmountsType)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *RatePlanScheduleDetailType) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRateSchedulePackages

`func (o *RatePlanScheduleDetailType) GetRateSchedulePackages() RatePackagesType`

GetRateSchedulePackages returns the RateSchedulePackages field if non-nil, zero value otherwise.

### GetRateSchedulePackagesOk

`func (o *RatePlanScheduleDetailType) GetRateSchedulePackagesOk() (*RatePackagesType, bool)`

GetRateSchedulePackagesOk returns a tuple with the RateSchedulePackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSchedulePackages

`func (o *RatePlanScheduleDetailType) SetRateSchedulePackages(v RatePackagesType)`

SetRateSchedulePackages sets RateSchedulePackages field to given value.

### HasRateSchedulePackages

`func (o *RatePlanScheduleDetailType) HasRateSchedulePackages() bool`

HasRateSchedulePackages returns a boolean if a field has been set.

### GetRoomTypeList

`func (o *RatePlanScheduleDetailType) GetRoomTypeList() RoomTypeListType`

GetRoomTypeList returns the RoomTypeList field if non-nil, zero value otherwise.

### GetRoomTypeListOk

`func (o *RatePlanScheduleDetailType) GetRoomTypeListOk() (*RoomTypeListType, bool)`

GetRoomTypeListOk returns a tuple with the RoomTypeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeList

`func (o *RatePlanScheduleDetailType) SetRoomTypeList(v RoomTypeListType)`

SetRoomTypeList sets RoomTypeList field to given value.

### HasRoomTypeList

`func (o *RatePlanScheduleDetailType) HasRoomTypeList() bool`

HasRoomTypeList returns a boolean if a field has been set.

### GetSaturday

`func (o *RatePlanScheduleDetailType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *RatePlanScheduleDetailType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *RatePlanScheduleDetailType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *RatePlanScheduleDetailType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetSeasonCode

`func (o *RatePlanScheduleDetailType) GetSeasonCode() string`

GetSeasonCode returns the SeasonCode field if non-nil, zero value otherwise.

### GetSeasonCodeOk

`func (o *RatePlanScheduleDetailType) GetSeasonCodeOk() (*string, bool)`

GetSeasonCodeOk returns a tuple with the SeasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonCode

`func (o *RatePlanScheduleDetailType) SetSeasonCode(v string)`

SetSeasonCode sets SeasonCode field to given value.

### HasSeasonCode

`func (o *RatePlanScheduleDetailType) HasSeasonCode() bool`

HasSeasonCode returns a boolean if a field has been set.

### GetStart

`func (o *RatePlanScheduleDetailType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RatePlanScheduleDetailType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RatePlanScheduleDetailType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RatePlanScheduleDetailType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetSunday

`func (o *RatePlanScheduleDetailType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *RatePlanScheduleDetailType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *RatePlanScheduleDetailType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *RatePlanScheduleDetailType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetThursday

`func (o *RatePlanScheduleDetailType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *RatePlanScheduleDetailType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *RatePlanScheduleDetailType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *RatePlanScheduleDetailType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetTierID

`func (o *RatePlanScheduleDetailType) GetTierID() int32`

GetTierID returns the TierID field if non-nil, zero value otherwise.

### GetTierIDOk

`func (o *RatePlanScheduleDetailType) GetTierIDOk() (*int32, bool)`

GetTierIDOk returns a tuple with the TierID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierID

`func (o *RatePlanScheduleDetailType) SetTierID(v int32)`

SetTierID sets TierID field to given value.

### HasTierID

`func (o *RatePlanScheduleDetailType) HasTierID() bool`

HasTierID returns a boolean if a field has been set.

### GetTuesday

`func (o *RatePlanScheduleDetailType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *RatePlanScheduleDetailType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *RatePlanScheduleDetailType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *RatePlanScheduleDetailType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *RatePlanScheduleDetailType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *RatePlanScheduleDetailType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *RatePlanScheduleDetailType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *RatePlanScheduleDetailType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



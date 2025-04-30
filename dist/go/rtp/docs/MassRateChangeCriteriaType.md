# MassRateChangeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**DateRange** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**Type** | Pointer to [**RatePlanScheduleType**](RatePlanScheduleType.md) |  | [optional] 
**BaseType** | Pointer to [**BaseType**](BaseType.md) |  | [optional] 
**Calculation** | Pointer to [**AmountOrOffsetType**](AmountOrOffsetType.md) |  | [optional] 
**AmountType** | Pointer to [**PercentageOrFlatType**](PercentageOrFlatType.md) |  | [optional] 
**RateCodes** | Pointer to **[]string** | Rate Codes. | [optional] 
**RoomTypes** | Pointer to **[]string** | Room Type. | [optional] 
**RateAmounts** | Pointer to [**RateAmountsType**](RateAmountsType.md) |  | [optional] 
**Rounding** | Pointer to [**RatePlanRoundingType**](RatePlanRoundingType.md) |  | [optional] 

## Methods

### NewMassRateChangeCriteriaType

`func NewMassRateChangeCriteriaType() *MassRateChangeCriteriaType`

NewMassRateChangeCriteriaType instantiates a new MassRateChangeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassRateChangeCriteriaTypeWithDefaults

`func NewMassRateChangeCriteriaTypeWithDefaults() *MassRateChangeCriteriaType`

NewMassRateChangeCriteriaTypeWithDefaults instantiates a new MassRateChangeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MassRateChangeCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MassRateChangeCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MassRateChangeCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MassRateChangeCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetDateRange

`func (o *MassRateChangeCriteriaType) GetDateRange() TimeSpanDaysOfWeekType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *MassRateChangeCriteriaType) GetDateRangeOk() (*TimeSpanDaysOfWeekType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *MassRateChangeCriteriaType) SetDateRange(v TimeSpanDaysOfWeekType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *MassRateChangeCriteriaType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetType

`func (o *MassRateChangeCriteriaType) GetType() RatePlanScheduleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MassRateChangeCriteriaType) GetTypeOk() (*RatePlanScheduleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MassRateChangeCriteriaType) SetType(v RatePlanScheduleType)`

SetType sets Type field to given value.

### HasType

`func (o *MassRateChangeCriteriaType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetBaseType

`func (o *MassRateChangeCriteriaType) GetBaseType() BaseType`

GetBaseType returns the BaseType field if non-nil, zero value otherwise.

### GetBaseTypeOk

`func (o *MassRateChangeCriteriaType) GetBaseTypeOk() (*BaseType, bool)`

GetBaseTypeOk returns a tuple with the BaseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseType

`func (o *MassRateChangeCriteriaType) SetBaseType(v BaseType)`

SetBaseType sets BaseType field to given value.

### HasBaseType

`func (o *MassRateChangeCriteriaType) HasBaseType() bool`

HasBaseType returns a boolean if a field has been set.

### GetCalculation

`func (o *MassRateChangeCriteriaType) GetCalculation() AmountOrOffsetType`

GetCalculation returns the Calculation field if non-nil, zero value otherwise.

### GetCalculationOk

`func (o *MassRateChangeCriteriaType) GetCalculationOk() (*AmountOrOffsetType, bool)`

GetCalculationOk returns a tuple with the Calculation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculation

`func (o *MassRateChangeCriteriaType) SetCalculation(v AmountOrOffsetType)`

SetCalculation sets Calculation field to given value.

### HasCalculation

`func (o *MassRateChangeCriteriaType) HasCalculation() bool`

HasCalculation returns a boolean if a field has been set.

### GetAmountType

`func (o *MassRateChangeCriteriaType) GetAmountType() PercentageOrFlatType`

GetAmountType returns the AmountType field if non-nil, zero value otherwise.

### GetAmountTypeOk

`func (o *MassRateChangeCriteriaType) GetAmountTypeOk() (*PercentageOrFlatType, bool)`

GetAmountTypeOk returns a tuple with the AmountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountType

`func (o *MassRateChangeCriteriaType) SetAmountType(v PercentageOrFlatType)`

SetAmountType sets AmountType field to given value.

### HasAmountType

`func (o *MassRateChangeCriteriaType) HasAmountType() bool`

HasAmountType returns a boolean if a field has been set.

### GetRateCodes

`func (o *MassRateChangeCriteriaType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *MassRateChangeCriteriaType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *MassRateChangeCriteriaType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *MassRateChangeCriteriaType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetRoomTypes

`func (o *MassRateChangeCriteriaType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *MassRateChangeCriteriaType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *MassRateChangeCriteriaType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *MassRateChangeCriteriaType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetRateAmounts

`func (o *MassRateChangeCriteriaType) GetRateAmounts() RateAmountsType`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *MassRateChangeCriteriaType) GetRateAmountsOk() (*RateAmountsType, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *MassRateChangeCriteriaType) SetRateAmounts(v RateAmountsType)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *MassRateChangeCriteriaType) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRounding

`func (o *MassRateChangeCriteriaType) GetRounding() RatePlanRoundingType`

GetRounding returns the Rounding field if non-nil, zero value otherwise.

### GetRoundingOk

`func (o *MassRateChangeCriteriaType) GetRoundingOk() (*RatePlanRoundingType, bool)`

GetRoundingOk returns a tuple with the Rounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRounding

`func (o *MassRateChangeCriteriaType) SetRounding(v RatePlanRoundingType)`

SetRounding sets Rounding field to given value.

### HasRounding

`func (o *MassRateChangeCriteriaType) HasRounding() bool`

HasRounding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



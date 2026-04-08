# DailyRateDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rate** | Pointer to [**AmountType**](AmountType.md) |  | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**Promotions** | Pointer to [**[]PromotionType**](PromotionType.md) | Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the reservation. | [optional] 
**MarketCode** | Pointer to **string** | Market Code of the reservation. | [optional] 
**SourceCode** | Pointer to **string** | Source Code of the reservation. | [optional] 
**RoomId** | Pointer to **string** | Room number of the reservation. | [optional] 
**RoomTypeToCharge** | Pointer to **string** | The Room Type on which the rate is based on. The reservation may use a different room type but is charged based on a different room type. | [optional] 
**RatePlanCode** | Pointer to **string** | The Rate Code of the reservation. | [optional] 
**StartDate** | Pointer to **string** | The date of the reservation stay. | [optional] 
**EndDate** | Pointer to **string** | The date of the reservation stay. If the same details need to be applied to a date range of the stay, then the Start Date and End Date would specify the range. | [optional] 
**CommissionCode** | Pointer to **string** | The Commission Code used for the reservation. | [optional] 
**FixedRate** | Pointer to **bool** | Indicates if the rate is fixed and could be different from the default rate amount of the rate code. | [optional] 
**DiscountAllowed** | Pointer to **bool** | Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code. | [optional] 
**ChangeAllSharers** | Pointer to **bool** | Indicates if all the share reservations will be changed. This is returned in the response after validation, indicating whether all shares will be changed (in the case of room type change or date change). | [optional] 

## Methods

### NewDailyRateDetailType

`func NewDailyRateDetailType() *DailyRateDetailType`

NewDailyRateDetailType instantiates a new DailyRateDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyRateDetailTypeWithDefaults

`func NewDailyRateDetailTypeWithDefaults() *DailyRateDetailType`

NewDailyRateDetailTypeWithDefaults instantiates a new DailyRateDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRate

`func (o *DailyRateDetailType) GetRate() AmountType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *DailyRateDetailType) GetRateOk() (*AmountType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *DailyRateDetailType) SetRate(v AmountType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *DailyRateDetailType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetGuestCounts

`func (o *DailyRateDetailType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *DailyRateDetailType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *DailyRateDetailType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *DailyRateDetailType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetPromotions

`func (o *DailyRateDetailType) GetPromotions() []PromotionType`

GetPromotions returns the Promotions field if non-nil, zero value otherwise.

### GetPromotionsOk

`func (o *DailyRateDetailType) GetPromotionsOk() (*[]PromotionType, bool)`

GetPromotionsOk returns a tuple with the Promotions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotions

`func (o *DailyRateDetailType) SetPromotions(v []PromotionType)`

SetPromotions sets Promotions field to given value.

### HasPromotions

`func (o *DailyRateDetailType) HasPromotions() bool`

HasPromotions returns a boolean if a field has been set.

### GetRoomType

`func (o *DailyRateDetailType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *DailyRateDetailType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *DailyRateDetailType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *DailyRateDetailType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetMarketCode

`func (o *DailyRateDetailType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *DailyRateDetailType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *DailyRateDetailType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *DailyRateDetailType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceCode

`func (o *DailyRateDetailType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *DailyRateDetailType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *DailyRateDetailType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *DailyRateDetailType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetRoomId

`func (o *DailyRateDetailType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *DailyRateDetailType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *DailyRateDetailType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *DailyRateDetailType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomTypeToCharge

`func (o *DailyRateDetailType) GetRoomTypeToCharge() string`

GetRoomTypeToCharge returns the RoomTypeToCharge field if non-nil, zero value otherwise.

### GetRoomTypeToChargeOk

`func (o *DailyRateDetailType) GetRoomTypeToChargeOk() (*string, bool)`

GetRoomTypeToChargeOk returns a tuple with the RoomTypeToCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeToCharge

`func (o *DailyRateDetailType) SetRoomTypeToCharge(v string)`

SetRoomTypeToCharge sets RoomTypeToCharge field to given value.

### HasRoomTypeToCharge

`func (o *DailyRateDetailType) HasRoomTypeToCharge() bool`

HasRoomTypeToCharge returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *DailyRateDetailType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *DailyRateDetailType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *DailyRateDetailType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *DailyRateDetailType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetStartDate

`func (o *DailyRateDetailType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *DailyRateDetailType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *DailyRateDetailType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *DailyRateDetailType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *DailyRateDetailType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *DailyRateDetailType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *DailyRateDetailType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *DailyRateDetailType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetCommissionCode

`func (o *DailyRateDetailType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *DailyRateDetailType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *DailyRateDetailType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *DailyRateDetailType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetFixedRate

`func (o *DailyRateDetailType) GetFixedRate() bool`

GetFixedRate returns the FixedRate field if non-nil, zero value otherwise.

### GetFixedRateOk

`func (o *DailyRateDetailType) GetFixedRateOk() (*bool, bool)`

GetFixedRateOk returns a tuple with the FixedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedRate

`func (o *DailyRateDetailType) SetFixedRate(v bool)`

SetFixedRate sets FixedRate field to given value.

### HasFixedRate

`func (o *DailyRateDetailType) HasFixedRate() bool`

HasFixedRate returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *DailyRateDetailType) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *DailyRateDetailType) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *DailyRateDetailType) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *DailyRateDetailType) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.

### GetChangeAllSharers

`func (o *DailyRateDetailType) GetChangeAllSharers() bool`

GetChangeAllSharers returns the ChangeAllSharers field if non-nil, zero value otherwise.

### GetChangeAllSharersOk

`func (o *DailyRateDetailType) GetChangeAllSharersOk() (*bool, bool)`

GetChangeAllSharersOk returns a tuple with the ChangeAllSharers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeAllSharers

`func (o *DailyRateDetailType) SetChangeAllSharers(v bool)`

SetChangeAllSharers sets ChangeAllSharers field to given value.

### HasChangeAllSharers

`func (o *DailyRateDetailType) HasChangeAllSharers() bool`

HasChangeAllSharers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



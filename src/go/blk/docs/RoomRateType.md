# RoomRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Availability** | Pointer to [**RoomRateAvailReasonType**](RoomRateAvailReasonType.md) |  | [optional] 
**Awards** | Pointer to [**ResAwardsType**](ResAwardsType.md) |  | [optional] 
**BarRanking** | Pointer to **int32** | Best Available rates ranking. | [optional] 
**BogoDiscount** | Pointer to **bool** | Indicates if the Rate Code has BOGO(Bye one Get one) indicator. | [optional] 
**CommissionAmount** | Pointer to **int32** | Indicates commission amount used by the rate plan. | [optional] 
**CommissionCode** | Pointer to **string** | Commission Code applicable for commission calculation for Travel Agent/Company. | [optional] 
**CommissionPercentage** | Pointer to **int32** | Indicates commission percentage used by the rate plan. | [optional] 
**Commissionable** | Pointer to **bool** | Indicates Commission is applicable for commission calculation for Travel Agent/Company. | [optional] 
**Complimentary** | Pointer to **bool** | Indicates this reservation rate is complimentary. | [optional] 
**CredentialsRequired** | Pointer to **bool** | If true, indicates that credentials is required to sell the rate code. | [optional] 
**DiscountAllowed** | Pointer to **bool** | Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**FixedRate** | Pointer to **bool** | Fixed Rate Indicator. | [optional] 
**ForeignExchange** | Pointer to [**ForeignExchangeType**](ForeignExchangeType.md) |  | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**HouseUseOnly** | Pointer to **bool** | Indicates this reservation is for House use. | [optional] 
**InventoryLender** | Pointer to **string** | Indicates whether the room type inventory was taken from the allotment or House availability. | [optional] 
**MarketCode** | Pointer to **string** | The code that relates to the market being sold to (e.g., the corporate market, packages). | [optional] 
**MarketCodeDescription** | Pointer to **string** | Description of the market code. | [optional] 
**MealPlans** | Pointer to [**MealPlansType**](MealPlansType.md) |  | [optional] 
**NumberOfUnits** | Pointer to **int32** | The number of rooms. | [optional] 
**Packages** | Pointer to [**[]PackageElementType**](PackageElementType.md) |  | [optional] 
**PromotionCode** | Pointer to **string** |  | [optional] 
**PseudoRoom** | Pointer to **bool** | True indicates as pseudo room type. This is usually used for a posting master reservation. | [optional] 
**RateDescription** | Pointer to **string** | Rate code description. | [optional] 
**RateGroup** | Pointer to **string** | For RatePlanSet equals BESTAVAILABLERATE, in case Rate Groups are enabled the element provides the rate group for the rate plan code. | [optional] 
**RateLevel** | Pointer to **string** | Rate plan type like Corporate,Regular,Military,Weekend etc. | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**Rates** | Pointer to [**RatesType**](RatesType.md) |  | [optional] 
**ReservationBlock** | Pointer to [**ReservationBlockType**](ReservationBlockType.md) |  | [optional] 
**RoomId** | Pointer to **string** | A string value representing the unique identification of a room. | [optional] 
**RoomRateInfo** | Pointer to **string** | Information about the Room Rate Combination. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**RoomTypeCharged** | Pointer to **string** | Room Type used for the Rate calculation. | [optional] 
**SourceCode** | Pointer to **string** | To specify where the business came from e.g. radio, newspaper ad, etc. | [optional] 
**SourceCodeDescription** | Pointer to **string** | Description of the source of business. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**StayProfiles** | Pointer to [**[]ReservationProfileType**](ReservationProfileType.md) | Profile associated with the room Stay. | [optional] 
**SuppressRate** | Pointer to **bool** |  | [optional] 
**TaxFreeGuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**TaxIncluded** | Pointer to **bool** | If true, indicates if tax is included in the rate code. | [optional] 
**Total** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 
**TotalPoints** | Pointer to [**PointsType**](PointsType.md) |  | [optional] 

## Methods

### NewRoomRateType

`func NewRoomRateType() *RoomRateType`

NewRoomRateType instantiates a new RoomRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRateTypeWithDefaults

`func NewRoomRateTypeWithDefaults() *RoomRateType`

NewRoomRateTypeWithDefaults instantiates a new RoomRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailability

`func (o *RoomRateType) GetAvailability() RoomRateAvailReasonType`

GetAvailability returns the Availability field if non-nil, zero value otherwise.

### GetAvailabilityOk

`func (o *RoomRateType) GetAvailabilityOk() (*RoomRateAvailReasonType, bool)`

GetAvailabilityOk returns a tuple with the Availability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailability

`func (o *RoomRateType) SetAvailability(v RoomRateAvailReasonType)`

SetAvailability sets Availability field to given value.

### HasAvailability

`func (o *RoomRateType) HasAvailability() bool`

HasAvailability returns a boolean if a field has been set.

### GetAwards

`func (o *RoomRateType) GetAwards() ResAwardsType`

GetAwards returns the Awards field if non-nil, zero value otherwise.

### GetAwardsOk

`func (o *RoomRateType) GetAwardsOk() (*ResAwardsType, bool)`

GetAwardsOk returns a tuple with the Awards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwards

`func (o *RoomRateType) SetAwards(v ResAwardsType)`

SetAwards sets Awards field to given value.

### HasAwards

`func (o *RoomRateType) HasAwards() bool`

HasAwards returns a boolean if a field has been set.

### GetBarRanking

`func (o *RoomRateType) GetBarRanking() int32`

GetBarRanking returns the BarRanking field if non-nil, zero value otherwise.

### GetBarRankingOk

`func (o *RoomRateType) GetBarRankingOk() (*int32, bool)`

GetBarRankingOk returns a tuple with the BarRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarRanking

`func (o *RoomRateType) SetBarRanking(v int32)`

SetBarRanking sets BarRanking field to given value.

### HasBarRanking

`func (o *RoomRateType) HasBarRanking() bool`

HasBarRanking returns a boolean if a field has been set.

### GetBogoDiscount

`func (o *RoomRateType) GetBogoDiscount() bool`

GetBogoDiscount returns the BogoDiscount field if non-nil, zero value otherwise.

### GetBogoDiscountOk

`func (o *RoomRateType) GetBogoDiscountOk() (*bool, bool)`

GetBogoDiscountOk returns a tuple with the BogoDiscount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBogoDiscount

`func (o *RoomRateType) SetBogoDiscount(v bool)`

SetBogoDiscount sets BogoDiscount field to given value.

### HasBogoDiscount

`func (o *RoomRateType) HasBogoDiscount() bool`

HasBogoDiscount returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *RoomRateType) GetCommissionAmount() int32`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *RoomRateType) GetCommissionAmountOk() (*int32, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *RoomRateType) SetCommissionAmount(v int32)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *RoomRateType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetCommissionCode

`func (o *RoomRateType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *RoomRateType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *RoomRateType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *RoomRateType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCommissionPercentage

`func (o *RoomRateType) GetCommissionPercentage() int32`

GetCommissionPercentage returns the CommissionPercentage field if non-nil, zero value otherwise.

### GetCommissionPercentageOk

`func (o *RoomRateType) GetCommissionPercentageOk() (*int32, bool)`

GetCommissionPercentageOk returns a tuple with the CommissionPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPercentage

`func (o *RoomRateType) SetCommissionPercentage(v int32)`

SetCommissionPercentage sets CommissionPercentage field to given value.

### HasCommissionPercentage

`func (o *RoomRateType) HasCommissionPercentage() bool`

HasCommissionPercentage returns a boolean if a field has been set.

### GetCommissionable

`func (o *RoomRateType) GetCommissionable() bool`

GetCommissionable returns the Commissionable field if non-nil, zero value otherwise.

### GetCommissionableOk

`func (o *RoomRateType) GetCommissionableOk() (*bool, bool)`

GetCommissionableOk returns a tuple with the Commissionable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionable

`func (o *RoomRateType) SetCommissionable(v bool)`

SetCommissionable sets Commissionable field to given value.

### HasCommissionable

`func (o *RoomRateType) HasCommissionable() bool`

HasCommissionable returns a boolean if a field has been set.

### GetComplimentary

`func (o *RoomRateType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *RoomRateType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *RoomRateType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *RoomRateType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetCredentialsRequired

`func (o *RoomRateType) GetCredentialsRequired() bool`

GetCredentialsRequired returns the CredentialsRequired field if non-nil, zero value otherwise.

### GetCredentialsRequiredOk

`func (o *RoomRateType) GetCredentialsRequiredOk() (*bool, bool)`

GetCredentialsRequiredOk returns a tuple with the CredentialsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsRequired

`func (o *RoomRateType) SetCredentialsRequired(v bool)`

SetCredentialsRequired sets CredentialsRequired field to given value.

### HasCredentialsRequired

`func (o *RoomRateType) HasCredentialsRequired() bool`

HasCredentialsRequired returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *RoomRateType) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *RoomRateType) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *RoomRateType) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *RoomRateType) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.

### GetEnd

`func (o *RoomRateType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RoomRateType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RoomRateType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RoomRateType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFixedRate

`func (o *RoomRateType) GetFixedRate() bool`

GetFixedRate returns the FixedRate field if non-nil, zero value otherwise.

### GetFixedRateOk

`func (o *RoomRateType) GetFixedRateOk() (*bool, bool)`

GetFixedRateOk returns a tuple with the FixedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedRate

`func (o *RoomRateType) SetFixedRate(v bool)`

SetFixedRate sets FixedRate field to given value.

### HasFixedRate

`func (o *RoomRateType) HasFixedRate() bool`

HasFixedRate returns a boolean if a field has been set.

### GetForeignExchange

`func (o *RoomRateType) GetForeignExchange() ForeignExchangeType`

GetForeignExchange returns the ForeignExchange field if non-nil, zero value otherwise.

### GetForeignExchangeOk

`func (o *RoomRateType) GetForeignExchangeOk() (*ForeignExchangeType, bool)`

GetForeignExchangeOk returns a tuple with the ForeignExchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForeignExchange

`func (o *RoomRateType) SetForeignExchange(v ForeignExchangeType)`

SetForeignExchange sets ForeignExchange field to given value.

### HasForeignExchange

`func (o *RoomRateType) HasForeignExchange() bool`

HasForeignExchange returns a boolean if a field has been set.

### GetGuestCounts

`func (o *RoomRateType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *RoomRateType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *RoomRateType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *RoomRateType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetHouseUseOnly

`func (o *RoomRateType) GetHouseUseOnly() bool`

GetHouseUseOnly returns the HouseUseOnly field if non-nil, zero value otherwise.

### GetHouseUseOnlyOk

`func (o *RoomRateType) GetHouseUseOnlyOk() (*bool, bool)`

GetHouseUseOnlyOk returns a tuple with the HouseUseOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseUseOnly

`func (o *RoomRateType) SetHouseUseOnly(v bool)`

SetHouseUseOnly sets HouseUseOnly field to given value.

### HasHouseUseOnly

`func (o *RoomRateType) HasHouseUseOnly() bool`

HasHouseUseOnly returns a boolean if a field has been set.

### GetInventoryLender

`func (o *RoomRateType) GetInventoryLender() string`

GetInventoryLender returns the InventoryLender field if non-nil, zero value otherwise.

### GetInventoryLenderOk

`func (o *RoomRateType) GetInventoryLenderOk() (*string, bool)`

GetInventoryLenderOk returns a tuple with the InventoryLender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryLender

`func (o *RoomRateType) SetInventoryLender(v string)`

SetInventoryLender sets InventoryLender field to given value.

### HasInventoryLender

`func (o *RoomRateType) HasInventoryLender() bool`

HasInventoryLender returns a boolean if a field has been set.

### GetMarketCode

`func (o *RoomRateType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *RoomRateType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *RoomRateType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *RoomRateType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMarketCodeDescription

`func (o *RoomRateType) GetMarketCodeDescription() string`

GetMarketCodeDescription returns the MarketCodeDescription field if non-nil, zero value otherwise.

### GetMarketCodeDescriptionOk

`func (o *RoomRateType) GetMarketCodeDescriptionOk() (*string, bool)`

GetMarketCodeDescriptionOk returns a tuple with the MarketCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodeDescription

`func (o *RoomRateType) SetMarketCodeDescription(v string)`

SetMarketCodeDescription sets MarketCodeDescription field to given value.

### HasMarketCodeDescription

`func (o *RoomRateType) HasMarketCodeDescription() bool`

HasMarketCodeDescription returns a boolean if a field has been set.

### GetMealPlans

`func (o *RoomRateType) GetMealPlans() MealPlansType`

GetMealPlans returns the MealPlans field if non-nil, zero value otherwise.

### GetMealPlansOk

`func (o *RoomRateType) GetMealPlansOk() (*MealPlansType, bool)`

GetMealPlansOk returns a tuple with the MealPlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealPlans

`func (o *RoomRateType) SetMealPlans(v MealPlansType)`

SetMealPlans sets MealPlans field to given value.

### HasMealPlans

`func (o *RoomRateType) HasMealPlans() bool`

HasMealPlans returns a boolean if a field has been set.

### GetNumberOfUnits

`func (o *RoomRateType) GetNumberOfUnits() int32`

GetNumberOfUnits returns the NumberOfUnits field if non-nil, zero value otherwise.

### GetNumberOfUnitsOk

`func (o *RoomRateType) GetNumberOfUnitsOk() (*int32, bool)`

GetNumberOfUnitsOk returns a tuple with the NumberOfUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUnits

`func (o *RoomRateType) SetNumberOfUnits(v int32)`

SetNumberOfUnits sets NumberOfUnits field to given value.

### HasNumberOfUnits

`func (o *RoomRateType) HasNumberOfUnits() bool`

HasNumberOfUnits returns a boolean if a field has been set.

### GetPackages

`func (o *RoomRateType) GetPackages() []PackageElementType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RoomRateType) GetPackagesOk() (*[]PackageElementType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RoomRateType) SetPackages(v []PackageElementType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RoomRateType) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetPromotionCode

`func (o *RoomRateType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *RoomRateType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *RoomRateType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *RoomRateType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetPseudoRoom

`func (o *RoomRateType) GetPseudoRoom() bool`

GetPseudoRoom returns the PseudoRoom field if non-nil, zero value otherwise.

### GetPseudoRoomOk

`func (o *RoomRateType) GetPseudoRoomOk() (*bool, bool)`

GetPseudoRoomOk returns a tuple with the PseudoRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudoRoom

`func (o *RoomRateType) SetPseudoRoom(v bool)`

SetPseudoRoom sets PseudoRoom field to given value.

### HasPseudoRoom

`func (o *RoomRateType) HasPseudoRoom() bool`

HasPseudoRoom returns a boolean if a field has been set.

### GetRateDescription

`func (o *RoomRateType) GetRateDescription() string`

GetRateDescription returns the RateDescription field if non-nil, zero value otherwise.

### GetRateDescriptionOk

`func (o *RoomRateType) GetRateDescriptionOk() (*string, bool)`

GetRateDescriptionOk returns a tuple with the RateDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateDescription

`func (o *RoomRateType) SetRateDescription(v string)`

SetRateDescription sets RateDescription field to given value.

### HasRateDescription

`func (o *RoomRateType) HasRateDescription() bool`

HasRateDescription returns a boolean if a field has been set.

### GetRateGroup

`func (o *RoomRateType) GetRateGroup() string`

GetRateGroup returns the RateGroup field if non-nil, zero value otherwise.

### GetRateGroupOk

`func (o *RoomRateType) GetRateGroupOk() (*string, bool)`

GetRateGroupOk returns a tuple with the RateGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateGroup

`func (o *RoomRateType) SetRateGroup(v string)`

SetRateGroup sets RateGroup field to given value.

### HasRateGroup

`func (o *RoomRateType) HasRateGroup() bool`

HasRateGroup returns a boolean if a field has been set.

### GetRateLevel

`func (o *RoomRateType) GetRateLevel() string`

GetRateLevel returns the RateLevel field if non-nil, zero value otherwise.

### GetRateLevelOk

`func (o *RoomRateType) GetRateLevelOk() (*string, bool)`

GetRateLevelOk returns a tuple with the RateLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevel

`func (o *RoomRateType) SetRateLevel(v string)`

SetRateLevel sets RateLevel field to given value.

### HasRateLevel

`func (o *RoomRateType) HasRateLevel() bool`

HasRateLevel returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RoomRateType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RoomRateType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RoomRateType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RoomRateType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRates

`func (o *RoomRateType) GetRates() RatesType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *RoomRateType) GetRatesOk() (*RatesType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *RoomRateType) SetRates(v RatesType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *RoomRateType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetReservationBlock

`func (o *RoomRateType) GetReservationBlock() ReservationBlockType`

GetReservationBlock returns the ReservationBlock field if non-nil, zero value otherwise.

### GetReservationBlockOk

`func (o *RoomRateType) GetReservationBlockOk() (*ReservationBlockType, bool)`

GetReservationBlockOk returns a tuple with the ReservationBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBlock

`func (o *RoomRateType) SetReservationBlock(v ReservationBlockType)`

SetReservationBlock sets ReservationBlock field to given value.

### HasReservationBlock

`func (o *RoomRateType) HasReservationBlock() bool`

HasReservationBlock returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomRateType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomRateType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomRateType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomRateType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomRateInfo

`func (o *RoomRateType) GetRoomRateInfo() string`

GetRoomRateInfo returns the RoomRateInfo field if non-nil, zero value otherwise.

### GetRoomRateInfoOk

`func (o *RoomRateType) GetRoomRateInfoOk() (*string, bool)`

GetRoomRateInfoOk returns a tuple with the RoomRateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRateInfo

`func (o *RoomRateType) SetRoomRateInfo(v string)`

SetRoomRateInfo sets RoomRateInfo field to given value.

### HasRoomRateInfo

`func (o *RoomRateType) HasRoomRateInfo() bool`

HasRoomRateInfo returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomRateType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomRateType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomRateType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomRateType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeCharged

`func (o *RoomRateType) GetRoomTypeCharged() string`

GetRoomTypeCharged returns the RoomTypeCharged field if non-nil, zero value otherwise.

### GetRoomTypeChargedOk

`func (o *RoomRateType) GetRoomTypeChargedOk() (*string, bool)`

GetRoomTypeChargedOk returns a tuple with the RoomTypeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeCharged

`func (o *RoomRateType) SetRoomTypeCharged(v string)`

SetRoomTypeCharged sets RoomTypeCharged field to given value.

### HasRoomTypeCharged

`func (o *RoomRateType) HasRoomTypeCharged() bool`

HasRoomTypeCharged returns a boolean if a field has been set.

### GetSourceCode

`func (o *RoomRateType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *RoomRateType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *RoomRateType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *RoomRateType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetSourceCodeDescription

`func (o *RoomRateType) GetSourceCodeDescription() string`

GetSourceCodeDescription returns the SourceCodeDescription field if non-nil, zero value otherwise.

### GetSourceCodeDescriptionOk

`func (o *RoomRateType) GetSourceCodeDescriptionOk() (*string, bool)`

GetSourceCodeDescriptionOk returns a tuple with the SourceCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCodeDescription

`func (o *RoomRateType) SetSourceCodeDescription(v string)`

SetSourceCodeDescription sets SourceCodeDescription field to given value.

### HasSourceCodeDescription

`func (o *RoomRateType) HasSourceCodeDescription() bool`

HasSourceCodeDescription returns a boolean if a field has been set.

### GetStart

`func (o *RoomRateType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RoomRateType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RoomRateType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RoomRateType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetStayProfiles

`func (o *RoomRateType) GetStayProfiles() []ReservationProfileType`

GetStayProfiles returns the StayProfiles field if non-nil, zero value otherwise.

### GetStayProfilesOk

`func (o *RoomRateType) GetStayProfilesOk() (*[]ReservationProfileType, bool)`

GetStayProfilesOk returns a tuple with the StayProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayProfiles

`func (o *RoomRateType) SetStayProfiles(v []ReservationProfileType)`

SetStayProfiles sets StayProfiles field to given value.

### HasStayProfiles

`func (o *RoomRateType) HasStayProfiles() bool`

HasStayProfiles returns a boolean if a field has been set.

### GetSuppressRate

`func (o *RoomRateType) GetSuppressRate() bool`

GetSuppressRate returns the SuppressRate field if non-nil, zero value otherwise.

### GetSuppressRateOk

`func (o *RoomRateType) GetSuppressRateOk() (*bool, bool)`

GetSuppressRateOk returns a tuple with the SuppressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressRate

`func (o *RoomRateType) SetSuppressRate(v bool)`

SetSuppressRate sets SuppressRate field to given value.

### HasSuppressRate

`func (o *RoomRateType) HasSuppressRate() bool`

HasSuppressRate returns a boolean if a field has been set.

### GetTaxFreeGuestCounts

`func (o *RoomRateType) GetTaxFreeGuestCounts() GuestCountsType`

GetTaxFreeGuestCounts returns the TaxFreeGuestCounts field if non-nil, zero value otherwise.

### GetTaxFreeGuestCountsOk

`func (o *RoomRateType) GetTaxFreeGuestCountsOk() (*GuestCountsType, bool)`

GetTaxFreeGuestCountsOk returns a tuple with the TaxFreeGuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxFreeGuestCounts

`func (o *RoomRateType) SetTaxFreeGuestCounts(v GuestCountsType)`

SetTaxFreeGuestCounts sets TaxFreeGuestCounts field to given value.

### HasTaxFreeGuestCounts

`func (o *RoomRateType) HasTaxFreeGuestCounts() bool`

HasTaxFreeGuestCounts returns a boolean if a field has been set.

### GetTaxIncluded

`func (o *RoomRateType) GetTaxIncluded() bool`

GetTaxIncluded returns the TaxIncluded field if non-nil, zero value otherwise.

### GetTaxIncludedOk

`func (o *RoomRateType) GetTaxIncludedOk() (*bool, bool)`

GetTaxIncludedOk returns a tuple with the TaxIncluded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxIncluded

`func (o *RoomRateType) SetTaxIncluded(v bool)`

SetTaxIncluded sets TaxIncluded field to given value.

### HasTaxIncluded

`func (o *RoomRateType) HasTaxIncluded() bool`

HasTaxIncluded returns a boolean if a field has been set.

### GetTotal

`func (o *RoomRateType) GetTotal() TotalType`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *RoomRateType) GetTotalOk() (*TotalType, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *RoomRateType) SetTotal(v TotalType)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *RoomRateType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTotalPoints

`func (o *RoomRateType) GetTotalPoints() PointsType`

GetTotalPoints returns the TotalPoints field if non-nil, zero value otherwise.

### GetTotalPointsOk

`func (o *RoomRateType) GetTotalPointsOk() (*PointsType, bool)`

GetTotalPointsOk returns a tuple with the TotalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPoints

`func (o *RoomRateType) SetTotalPoints(v PointsType)`

SetTotalPoints sets TotalPoints field to given value.

### HasTotalPoints

`func (o *RoomRateType) HasTotalPoints() bool`

HasTotalPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



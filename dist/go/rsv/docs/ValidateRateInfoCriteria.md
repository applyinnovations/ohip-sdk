# ValidateRateInfoCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**DetailDate** | Pointer to **string** | This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed. | [optional] 
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**Quantity** | Pointer to **int32** |  | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges. | [optional] 
**ReservationProfiles** | Pointer to [**[]ReservationProfileType**](ReservationProfileType.md) | Refer to Generic common types document. | [optional] 
**ResvRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**SummaryInfo** | Pointer to **bool** | Flag to indicate if summary information is required. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewValidateRateInfoCriteria

`func NewValidateRateInfoCriteria() *ValidateRateInfoCriteria`

NewValidateRateInfoCriteria instantiates a new ValidateRateInfoCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateRateInfoCriteriaWithDefaults

`func NewValidateRateInfoCriteriaWithDefaults() *ValidateRateInfoCriteria`

NewValidateRateInfoCriteriaWithDefaults instantiates a new ValidateRateInfoCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *ValidateRateInfoCriteria) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ValidateRateInfoCriteria) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ValidateRateInfoCriteria) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ValidateRateInfoCriteria) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ValidateRateInfoCriteria) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ValidateRateInfoCriteria) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ValidateRateInfoCriteria) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ValidateRateInfoCriteria) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *ValidateRateInfoCriteria) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *ValidateRateInfoCriteria) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *ValidateRateInfoCriteria) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *ValidateRateInfoCriteria) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *ValidateRateInfoCriteria) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *ValidateRateInfoCriteria) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *ValidateRateInfoCriteria) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *ValidateRateInfoCriteria) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetDetailDate

`func (o *ValidateRateInfoCriteria) GetDetailDate() string`

GetDetailDate returns the DetailDate field if non-nil, zero value otherwise.

### GetDetailDateOk

`func (o *ValidateRateInfoCriteria) GetDetailDateOk() (*string, bool)`

GetDetailDateOk returns a tuple with the DetailDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailDate

`func (o *ValidateRateInfoCriteria) SetDetailDate(v string)`

SetDetailDate sets DetailDate field to given value.

### HasDetailDate

`func (o *ValidateRateInfoCriteria) HasDetailDate() bool`

HasDetailDate returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *ValidateRateInfoCriteria) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *ValidateRateInfoCriteria) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *ValidateRateInfoCriteria) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *ValidateRateInfoCriteria) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetGuestCounts

`func (o *ValidateRateInfoCriteria) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *ValidateRateInfoCriteria) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *ValidateRateInfoCriteria) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *ValidateRateInfoCriteria) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetQuantity

`func (o *ValidateRateInfoCriteria) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ValidateRateInfoCriteria) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ValidateRateInfoCriteria) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ValidateRateInfoCriteria) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ValidateRateInfoCriteria) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ValidateRateInfoCriteria) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ValidateRateInfoCriteria) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ValidateRateInfoCriteria) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetReservationId

`func (o *ValidateRateInfoCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ValidateRateInfoCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ValidateRateInfoCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ValidateRateInfoCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationPackages

`func (o *ValidateRateInfoCriteria) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *ValidateRateInfoCriteria) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *ValidateRateInfoCriteria) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *ValidateRateInfoCriteria) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetReservationProfiles

`func (o *ValidateRateInfoCriteria) GetReservationProfiles() []ReservationProfileType`

GetReservationProfiles returns the ReservationProfiles field if non-nil, zero value otherwise.

### GetReservationProfilesOk

`func (o *ValidateRateInfoCriteria) GetReservationProfilesOk() (*[]ReservationProfileType, bool)`

GetReservationProfilesOk returns a tuple with the ReservationProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfiles

`func (o *ValidateRateInfoCriteria) SetReservationProfiles(v []ReservationProfileType)`

SetReservationProfiles sets ReservationProfiles field to given value.

### HasReservationProfiles

`func (o *ValidateRateInfoCriteria) HasReservationProfiles() bool`

HasReservationProfiles returns a boolean if a field has been set.

### GetResvRateAmount

`func (o *ValidateRateInfoCriteria) GetResvRateAmount() CurrencyAmountType`

GetResvRateAmount returns the ResvRateAmount field if non-nil, zero value otherwise.

### GetResvRateAmountOk

`func (o *ValidateRateInfoCriteria) GetResvRateAmountOk() (*CurrencyAmountType, bool)`

GetResvRateAmountOk returns a tuple with the ResvRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvRateAmount

`func (o *ValidateRateInfoCriteria) SetResvRateAmount(v CurrencyAmountType)`

SetResvRateAmount sets ResvRateAmount field to given value.

### HasResvRateAmount

`func (o *ValidateRateInfoCriteria) HasResvRateAmount() bool`

HasResvRateAmount returns a boolean if a field has been set.

### GetRoomType

`func (o *ValidateRateInfoCriteria) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ValidateRateInfoCriteria) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ValidateRateInfoCriteria) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ValidateRateInfoCriteria) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSummaryInfo

`func (o *ValidateRateInfoCriteria) GetSummaryInfo() bool`

GetSummaryInfo returns the SummaryInfo field if non-nil, zero value otherwise.

### GetSummaryInfoOk

`func (o *ValidateRateInfoCriteria) GetSummaryInfoOk() (*bool, bool)`

GetSummaryInfoOk returns a tuple with the SummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryInfo

`func (o *ValidateRateInfoCriteria) SetSummaryInfo(v bool)`

SetSummaryInfo sets SummaryInfo field to given value.

### HasSummaryInfo

`func (o *ValidateRateInfoCriteria) HasSummaryInfo() bool`

HasSummaryInfo returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ValidateRateInfoCriteria) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ValidateRateInfoCriteria) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ValidateRateInfoCriteria) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ValidateRateInfoCriteria) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



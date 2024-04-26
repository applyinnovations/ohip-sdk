# ParityRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAmounts** | Pointer to [**[]AdditionalAmountType**](AdditionalAmountType.md) |  | [optional] 
**AdditionalDetailList** | Pointer to [**[]AdditionalDetailType**](AdditionalDetailType.md) |  | [optional] 
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**ArrivalDate** | Pointer to **string** | Arrival Date. | [optional] 
**AvailableRooms** | Pointer to **int32** |  | [optional] 
**ChannelRatePlanCategory** | Pointer to **string** |  | [optional] 
**Closed** | Pointer to **bool** |  | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**RateAmounts** | Pointer to [**ParityRateTypeRateAmounts**](ParityRateTypeRateAmounts.md) |  | [optional] 
**RateChangesOverDays** | Pointer to **bool** |  | [optional] 
**RateDescription** | Pointer to [**EnhancedDescriptionType**](EnhancedDescriptionType.md) |  | [optional] 
**RateFrequency** | Pointer to **string** |  | [optional] 
**RatePlanDescription** | Pointer to **string** |  | [optional] 
**RoomTypeDescription** | Pointer to [**EnhancedDescriptionType**](EnhancedDescriptionType.md) |  | [optional] 
**StatusCode** | Pointer to **string** | Status Code related to functionality. | [optional] 
**StatusDescription** | Pointer to **string** | Description of Status Code. | [optional] 
**TotalPricingAmounts** | Pointer to [**ParityRateTypeTotalPricingAmounts**](ParityRateTypeTotalPricingAmounts.md) |  | [optional] 
**WeekendDay** | Pointer to **bool** |  | [optional] 

## Methods

### NewParityRateType

`func NewParityRateType() *ParityRateType`

NewParityRateType instantiates a new ParityRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParityRateTypeWithDefaults

`func NewParityRateTypeWithDefaults() *ParityRateType`

NewParityRateTypeWithDefaults instantiates a new ParityRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalAmounts

`func (o *ParityRateType) GetAdditionalAmounts() []AdditionalAmountType`

GetAdditionalAmounts returns the AdditionalAmounts field if non-nil, zero value otherwise.

### GetAdditionalAmountsOk

`func (o *ParityRateType) GetAdditionalAmountsOk() (*[]AdditionalAmountType, bool)`

GetAdditionalAmountsOk returns a tuple with the AdditionalAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAmounts

`func (o *ParityRateType) SetAdditionalAmounts(v []AdditionalAmountType)`

SetAdditionalAmounts sets AdditionalAmounts field to given value.

### HasAdditionalAmounts

`func (o *ParityRateType) HasAdditionalAmounts() bool`

HasAdditionalAmounts returns a boolean if a field has been set.

### GetAdditionalDetailList

`func (o *ParityRateType) GetAdditionalDetailList() []AdditionalDetailType`

GetAdditionalDetailList returns the AdditionalDetailList field if non-nil, zero value otherwise.

### GetAdditionalDetailListOk

`func (o *ParityRateType) GetAdditionalDetailListOk() (*[]AdditionalDetailType, bool)`

GetAdditionalDetailListOk returns a tuple with the AdditionalDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalDetailList

`func (o *ParityRateType) SetAdditionalDetailList(v []AdditionalDetailType)`

SetAdditionalDetailList sets AdditionalDetailList field to given value.

### HasAdditionalDetailList

`func (o *ParityRateType) HasAdditionalDetailList() bool`

HasAdditionalDetailList returns a boolean if a field has been set.

### GetAmount

`func (o *ParityRateType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ParityRateType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ParityRateType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ParityRateType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ParityRateType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ParityRateType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ParityRateType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ParityRateType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetAvailableRooms

`func (o *ParityRateType) GetAvailableRooms() int32`

GetAvailableRooms returns the AvailableRooms field if non-nil, zero value otherwise.

### GetAvailableRoomsOk

`func (o *ParityRateType) GetAvailableRoomsOk() (*int32, bool)`

GetAvailableRoomsOk returns a tuple with the AvailableRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRooms

`func (o *ParityRateType) SetAvailableRooms(v int32)`

SetAvailableRooms sets AvailableRooms field to given value.

### HasAvailableRooms

`func (o *ParityRateType) HasAvailableRooms() bool`

HasAvailableRooms returns a boolean if a field has been set.

### GetChannelRatePlanCategory

`func (o *ParityRateType) GetChannelRatePlanCategory() string`

GetChannelRatePlanCategory returns the ChannelRatePlanCategory field if non-nil, zero value otherwise.

### GetChannelRatePlanCategoryOk

`func (o *ParityRateType) GetChannelRatePlanCategoryOk() (*string, bool)`

GetChannelRatePlanCategoryOk returns a tuple with the ChannelRatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCategory

`func (o *ParityRateType) SetChannelRatePlanCategory(v string)`

SetChannelRatePlanCategory sets ChannelRatePlanCategory field to given value.

### HasChannelRatePlanCategory

`func (o *ParityRateType) HasChannelRatePlanCategory() bool`

HasChannelRatePlanCategory returns a boolean if a field has been set.

### GetClosed

`func (o *ParityRateType) GetClosed() bool`

GetClosed returns the Closed field if non-nil, zero value otherwise.

### GetClosedOk

`func (o *ParityRateType) GetClosedOk() (*bool, bool)`

GetClosedOk returns a tuple with the Closed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClosed

`func (o *ParityRateType) SetClosed(v bool)`

SetClosed sets Closed field to given value.

### HasClosed

`func (o *ParityRateType) HasClosed() bool`

HasClosed returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ParityRateType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ParityRateType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ParityRateType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ParityRateType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRateAmounts

`func (o *ParityRateType) GetRateAmounts() ParityRateTypeRateAmounts`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *ParityRateType) GetRateAmountsOk() (*ParityRateTypeRateAmounts, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *ParityRateType) SetRateAmounts(v ParityRateTypeRateAmounts)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *ParityRateType) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRateChangesOverDays

`func (o *ParityRateType) GetRateChangesOverDays() bool`

GetRateChangesOverDays returns the RateChangesOverDays field if non-nil, zero value otherwise.

### GetRateChangesOverDaysOk

`func (o *ParityRateType) GetRateChangesOverDaysOk() (*bool, bool)`

GetRateChangesOverDaysOk returns a tuple with the RateChangesOverDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChangesOverDays

`func (o *ParityRateType) SetRateChangesOverDays(v bool)`

SetRateChangesOverDays sets RateChangesOverDays field to given value.

### HasRateChangesOverDays

`func (o *ParityRateType) HasRateChangesOverDays() bool`

HasRateChangesOverDays returns a boolean if a field has been set.

### GetRateDescription

`func (o *ParityRateType) GetRateDescription() EnhancedDescriptionType`

GetRateDescription returns the RateDescription field if non-nil, zero value otherwise.

### GetRateDescriptionOk

`func (o *ParityRateType) GetRateDescriptionOk() (*EnhancedDescriptionType, bool)`

GetRateDescriptionOk returns a tuple with the RateDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateDescription

`func (o *ParityRateType) SetRateDescription(v EnhancedDescriptionType)`

SetRateDescription sets RateDescription field to given value.

### HasRateDescription

`func (o *ParityRateType) HasRateDescription() bool`

HasRateDescription returns a boolean if a field has been set.

### GetRateFrequency

`func (o *ParityRateType) GetRateFrequency() string`

GetRateFrequency returns the RateFrequency field if non-nil, zero value otherwise.

### GetRateFrequencyOk

`func (o *ParityRateType) GetRateFrequencyOk() (*string, bool)`

GetRateFrequencyOk returns a tuple with the RateFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateFrequency

`func (o *ParityRateType) SetRateFrequency(v string)`

SetRateFrequency sets RateFrequency field to given value.

### HasRateFrequency

`func (o *ParityRateType) HasRateFrequency() bool`

HasRateFrequency returns a boolean if a field has been set.

### GetRatePlanDescription

`func (o *ParityRateType) GetRatePlanDescription() string`

GetRatePlanDescription returns the RatePlanDescription field if non-nil, zero value otherwise.

### GetRatePlanDescriptionOk

`func (o *ParityRateType) GetRatePlanDescriptionOk() (*string, bool)`

GetRatePlanDescriptionOk returns a tuple with the RatePlanDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanDescription

`func (o *ParityRateType) SetRatePlanDescription(v string)`

SetRatePlanDescription sets RatePlanDescription field to given value.

### HasRatePlanDescription

`func (o *ParityRateType) HasRatePlanDescription() bool`

HasRatePlanDescription returns a boolean if a field has been set.

### GetRoomTypeDescription

`func (o *ParityRateType) GetRoomTypeDescription() EnhancedDescriptionType`

GetRoomTypeDescription returns the RoomTypeDescription field if non-nil, zero value otherwise.

### GetRoomTypeDescriptionOk

`func (o *ParityRateType) GetRoomTypeDescriptionOk() (*EnhancedDescriptionType, bool)`

GetRoomTypeDescriptionOk returns a tuple with the RoomTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeDescription

`func (o *ParityRateType) SetRoomTypeDescription(v EnhancedDescriptionType)`

SetRoomTypeDescription sets RoomTypeDescription field to given value.

### HasRoomTypeDescription

`func (o *ParityRateType) HasRoomTypeDescription() bool`

HasRoomTypeDescription returns a boolean if a field has been set.

### GetStatusCode

`func (o *ParityRateType) GetStatusCode() string`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ParityRateType) GetStatusCodeOk() (*string, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ParityRateType) SetStatusCode(v string)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ParityRateType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetStatusDescription

`func (o *ParityRateType) GetStatusDescription() string`

GetStatusDescription returns the StatusDescription field if non-nil, zero value otherwise.

### GetStatusDescriptionOk

`func (o *ParityRateType) GetStatusDescriptionOk() (*string, bool)`

GetStatusDescriptionOk returns a tuple with the StatusDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDescription

`func (o *ParityRateType) SetStatusDescription(v string)`

SetStatusDescription sets StatusDescription field to given value.

### HasStatusDescription

`func (o *ParityRateType) HasStatusDescription() bool`

HasStatusDescription returns a boolean if a field has been set.

### GetTotalPricingAmounts

`func (o *ParityRateType) GetTotalPricingAmounts() ParityRateTypeTotalPricingAmounts`

GetTotalPricingAmounts returns the TotalPricingAmounts field if non-nil, zero value otherwise.

### GetTotalPricingAmountsOk

`func (o *ParityRateType) GetTotalPricingAmountsOk() (*ParityRateTypeTotalPricingAmounts, bool)`

GetTotalPricingAmountsOk returns a tuple with the TotalPricingAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPricingAmounts

`func (o *ParityRateType) SetTotalPricingAmounts(v ParityRateTypeTotalPricingAmounts)`

SetTotalPricingAmounts sets TotalPricingAmounts field to given value.

### HasTotalPricingAmounts

`func (o *ParityRateType) HasTotalPricingAmounts() bool`

HasTotalPricingAmounts returns a boolean if a field has been set.

### GetWeekendDay

`func (o *ParityRateType) GetWeekendDay() bool`

GetWeekendDay returns the WeekendDay field if non-nil, zero value otherwise.

### GetWeekendDayOk

`func (o *ParityRateType) GetWeekendDayOk() (*bool, bool)`

GetWeekendDayOk returns a tuple with the WeekendDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekendDay

`func (o *ParityRateType) SetWeekendDay(v bool)`

SetWeekendDay sets WeekendDay field to given value.

### HasWeekendDay

`func (o *ParityRateType) HasWeekendDay() bool`

HasWeekendDay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



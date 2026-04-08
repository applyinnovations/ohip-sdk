# TurnawayDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Holds Opera Hotel/Resort code of turn away reservation. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**NumberOfRooms** | Pointer to **int32** | Holds the number of rooms. | [optional] 
**MarketCode** | Pointer to **string** | Holds the code that relates to the market being sold to (e.g., the corporate market, packages). | [optional] 
**RatePlanCode** | Pointer to **string** | Holds the Rate Code. | [optional] 
**RoomType** | Pointer to **string** | Holds the Room Type. | [optional] 
**RateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**YieldMarketCode** | Pointer to **string** | Holds the Yield Market Code. | [optional] 

## Methods

### NewTurnawayDetailsType

`func NewTurnawayDetailsType() *TurnawayDetailsType`

NewTurnawayDetailsType instantiates a new TurnawayDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTurnawayDetailsTypeWithDefaults

`func NewTurnawayDetailsTypeWithDefaults() *TurnawayDetailsType`

NewTurnawayDetailsTypeWithDefaults instantiates a new TurnawayDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TurnawayDetailsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TurnawayDetailsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TurnawayDetailsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TurnawayDetailsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *TurnawayDetailsType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *TurnawayDetailsType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *TurnawayDetailsType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *TurnawayDetailsType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *TurnawayDetailsType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *TurnawayDetailsType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *TurnawayDetailsType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *TurnawayDetailsType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetMarketCode

`func (o *TurnawayDetailsType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *TurnawayDetailsType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *TurnawayDetailsType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *TurnawayDetailsType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *TurnawayDetailsType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *TurnawayDetailsType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *TurnawayDetailsType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *TurnawayDetailsType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRoomType

`func (o *TurnawayDetailsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *TurnawayDetailsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *TurnawayDetailsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *TurnawayDetailsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRateAmount

`func (o *TurnawayDetailsType) GetRateAmount() CurrencyAmountType`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *TurnawayDetailsType) GetRateAmountOk() (*CurrencyAmountType, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *TurnawayDetailsType) SetRateAmount(v CurrencyAmountType)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *TurnawayDetailsType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetGuestCounts

`func (o *TurnawayDetailsType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *TurnawayDetailsType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *TurnawayDetailsType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *TurnawayDetailsType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetYieldMarketCode

`func (o *TurnawayDetailsType) GetYieldMarketCode() string`

GetYieldMarketCode returns the YieldMarketCode field if non-nil, zero value otherwise.

### GetYieldMarketCodeOk

`func (o *TurnawayDetailsType) GetYieldMarketCodeOk() (*string, bool)`

GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldMarketCode

`func (o *TurnawayDetailsType) SetYieldMarketCode(v string)`

SetYieldMarketCode sets YieldMarketCode field to given value.

### HasYieldMarketCode

`func (o *TurnawayDetailsType) HasYieldMarketCode() bool`

HasYieldMarketCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



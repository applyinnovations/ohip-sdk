# ConfigTestUpsellRuleSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Specifies the hotel code for which the upsell rules have to be tested. | [optional] 
**ArrivalDate** | Pointer to **string** | Arrival date set in the test reservation. | [optional] 
**Nights** | Pointer to **int32** | Number of nights set in the test reservation. | [optional] 
**Adults** | Pointer to **int32** | Signifies the number of adults set in the test reservation. | [optional] 
**Children** | Pointer to **int32** | Signifies the number of children set in the test reservation. | [optional] 
**NumberOfRooms** | Pointer to **int32** | The number of rooms set in the test reservation. | [optional] 
**RoomType** | Pointer to **string** | Signifies the room type for which the upsell rule test has to be run. | [optional] 
**RateCode** | Pointer to **string** | Signifies the rate code for which the upsell rule test has to be run. | [optional] 
**MembershipType** | Pointer to **string** | Signifies the membership type for which the upsell rule test has to be run. | [optional] 
**MembershipLevel** | Pointer to **string** | Signifies the membership level for which the upsell rule test has to be run. | [optional] 
**ReservationType** | Pointer to **string** | Signifies the reservation type for which the upsell rule test has to be run. | [optional] 
**MarketCode** | Pointer to **string** | Signifies the market code for which the upsell rule test has to be run. | [optional] 
**Channel** | Pointer to **string** | Signifies the channel for which the upsell rule test has to be run. | [optional] 
**OccupancyLevelId** | Pointer to **int32** | Signifies the occupancy level id for which the upsell rule test has to be run. This field is only available when the test upgrade rule is set for &#39;Upgrade By Occupancy Levels&#39;. | [optional] 

## Methods

### NewConfigTestUpsellRuleSearchType

`func NewConfigTestUpsellRuleSearchType() *ConfigTestUpsellRuleSearchType`

NewConfigTestUpsellRuleSearchType instantiates a new ConfigTestUpsellRuleSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigTestUpsellRuleSearchTypeWithDefaults

`func NewConfigTestUpsellRuleSearchTypeWithDefaults() *ConfigTestUpsellRuleSearchType`

NewConfigTestUpsellRuleSearchTypeWithDefaults instantiates a new ConfigTestUpsellRuleSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ConfigTestUpsellRuleSearchType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigTestUpsellRuleSearchType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigTestUpsellRuleSearchType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigTestUpsellRuleSearchType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ConfigTestUpsellRuleSearchType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ConfigTestUpsellRuleSearchType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ConfigTestUpsellRuleSearchType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ConfigTestUpsellRuleSearchType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetNights

`func (o *ConfigTestUpsellRuleSearchType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *ConfigTestUpsellRuleSearchType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *ConfigTestUpsellRuleSearchType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *ConfigTestUpsellRuleSearchType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetAdults

`func (o *ConfigTestUpsellRuleSearchType) GetAdults() int32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *ConfigTestUpsellRuleSearchType) GetAdultsOk() (*int32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *ConfigTestUpsellRuleSearchType) SetAdults(v int32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *ConfigTestUpsellRuleSearchType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetChildren

`func (o *ConfigTestUpsellRuleSearchType) GetChildren() int32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *ConfigTestUpsellRuleSearchType) GetChildrenOk() (*int32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *ConfigTestUpsellRuleSearchType) SetChildren(v int32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *ConfigTestUpsellRuleSearchType) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *ConfigTestUpsellRuleSearchType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *ConfigTestUpsellRuleSearchType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *ConfigTestUpsellRuleSearchType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *ConfigTestUpsellRuleSearchType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetRoomType

`func (o *ConfigTestUpsellRuleSearchType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigTestUpsellRuleSearchType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigTestUpsellRuleSearchType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigTestUpsellRuleSearchType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRateCode

`func (o *ConfigTestUpsellRuleSearchType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *ConfigTestUpsellRuleSearchType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *ConfigTestUpsellRuleSearchType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *ConfigTestUpsellRuleSearchType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetMembershipType

`func (o *ConfigTestUpsellRuleSearchType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ConfigTestUpsellRuleSearchType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ConfigTestUpsellRuleSearchType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ConfigTestUpsellRuleSearchType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ConfigTestUpsellRuleSearchType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ConfigTestUpsellRuleSearchType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ConfigTestUpsellRuleSearchType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ConfigTestUpsellRuleSearchType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetReservationType

`func (o *ConfigTestUpsellRuleSearchType) GetReservationType() string`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *ConfigTestUpsellRuleSearchType) GetReservationTypeOk() (*string, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *ConfigTestUpsellRuleSearchType) SetReservationType(v string)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *ConfigTestUpsellRuleSearchType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.

### GetMarketCode

`func (o *ConfigTestUpsellRuleSearchType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *ConfigTestUpsellRuleSearchType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *ConfigTestUpsellRuleSearchType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *ConfigTestUpsellRuleSearchType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetChannel

`func (o *ConfigTestUpsellRuleSearchType) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *ConfigTestUpsellRuleSearchType) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *ConfigTestUpsellRuleSearchType) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *ConfigTestUpsellRuleSearchType) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetOccupancyLevelId

`func (o *ConfigTestUpsellRuleSearchType) GetOccupancyLevelId() int32`

GetOccupancyLevelId returns the OccupancyLevelId field if non-nil, zero value otherwise.

### GetOccupancyLevelIdOk

`func (o *ConfigTestUpsellRuleSearchType) GetOccupancyLevelIdOk() (*int32, bool)`

GetOccupancyLevelIdOk returns a tuple with the OccupancyLevelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyLevelId

`func (o *ConfigTestUpsellRuleSearchType) SetOccupancyLevelId(v int32)`

SetOccupancyLevelId sets OccupancyLevelId field to given value.

### HasOccupancyLevelId

`func (o *ConfigTestUpsellRuleSearchType) HasOccupancyLevelId() bool`

HasOccupancyLevelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



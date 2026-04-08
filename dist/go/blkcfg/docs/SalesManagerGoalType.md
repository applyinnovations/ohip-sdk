# SalesManagerGoalType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Sales Manager | [optional] 
**NameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GoalID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GoalType** | Pointer to **string** | Specifies the Goal Type | [optional] 
**ArrivalGoal** | Pointer to **bool** | Specifies if this is a Arrival or a Production Goal | [optional] 
**ProductionStartDate** | Pointer to **string** | Specifies the Production Start Date | [optional] 
**ProductionEndDate** | Pointer to **string** | Specifies the Production End Date | [optional] 
**ProductionPeriodCode** | Pointer to **string** | Specifies the Production Period Code | [optional] 
**ArrivalStartDate** | Pointer to **string** | Specifies the Arrival Start Date | [optional] 
**ArrivalEndDate** | Pointer to **string** | Specifies the Arrival End Date | [optional] 
**ArrivalPeriodCode** | Pointer to **string** | Specifies the Arrival Period Code | [optional] 
**MarketCode** | Pointer to **string** | Market Code assigned for the goal | [optional] 
**RoomNights** | Pointer to **int32** | Room Nights assigned for the goal | [optional] 
**RoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AverageRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CateringCovers** | Pointer to **int32** | Number of meals or covers assigned for the Goal | [optional] 
**FBRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AverageFBCheck** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OtherRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ActivityType** | Pointer to **string** | Specifies the type of activity being set as a goal | [optional] 
**ActivitiesCount** | Pointer to **int32** | Specifies the number of activities of Activity Type being set as a goal | [optional] 
**GroupRoomsWithCatering** | Pointer to **bool** | Goal type used to fetch goals related to Group Rooms and Catering business | [optional] 
**TransientRoom** | Pointer to **bool** | Goal type used to fetch non group goals related to Rooms business | [optional] 
**Activity** | Pointer to **bool** | Indicates if the Sales manager has Activity Goal | [optional] 
**Future** | Pointer to **bool** | Use this indicator to fetch goal&#39;s having Production From or Arrival From dates later than the current business date or quarter | [optional] 

## Methods

### NewSalesManagerGoalType

`func NewSalesManagerGoalType() *SalesManagerGoalType`

NewSalesManagerGoalType instantiates a new SalesManagerGoalType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesManagerGoalTypeWithDefaults

`func NewSalesManagerGoalTypeWithDefaults() *SalesManagerGoalType`

NewSalesManagerGoalTypeWithDefaults instantiates a new SalesManagerGoalType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *SalesManagerGoalType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SalesManagerGoalType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SalesManagerGoalType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SalesManagerGoalType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNameId

`func (o *SalesManagerGoalType) GetNameId() UniqueIDType`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *SalesManagerGoalType) GetNameIdOk() (*UniqueIDType, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *SalesManagerGoalType) SetNameId(v UniqueIDType)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *SalesManagerGoalType) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetGoalID

`func (o *SalesManagerGoalType) GetGoalID() UniqueIDType`

GetGoalID returns the GoalID field if non-nil, zero value otherwise.

### GetGoalIDOk

`func (o *SalesManagerGoalType) GetGoalIDOk() (*UniqueIDType, bool)`

GetGoalIDOk returns a tuple with the GoalID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalID

`func (o *SalesManagerGoalType) SetGoalID(v UniqueIDType)`

SetGoalID sets GoalID field to given value.

### HasGoalID

`func (o *SalesManagerGoalType) HasGoalID() bool`

HasGoalID returns a boolean if a field has been set.

### GetGoalType

`func (o *SalesManagerGoalType) GetGoalType() string`

GetGoalType returns the GoalType field if non-nil, zero value otherwise.

### GetGoalTypeOk

`func (o *SalesManagerGoalType) GetGoalTypeOk() (*string, bool)`

GetGoalTypeOk returns a tuple with the GoalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalType

`func (o *SalesManagerGoalType) SetGoalType(v string)`

SetGoalType sets GoalType field to given value.

### HasGoalType

`func (o *SalesManagerGoalType) HasGoalType() bool`

HasGoalType returns a boolean if a field has been set.

### GetArrivalGoal

`func (o *SalesManagerGoalType) GetArrivalGoal() bool`

GetArrivalGoal returns the ArrivalGoal field if non-nil, zero value otherwise.

### GetArrivalGoalOk

`func (o *SalesManagerGoalType) GetArrivalGoalOk() (*bool, bool)`

GetArrivalGoalOk returns a tuple with the ArrivalGoal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalGoal

`func (o *SalesManagerGoalType) SetArrivalGoal(v bool)`

SetArrivalGoal sets ArrivalGoal field to given value.

### HasArrivalGoal

`func (o *SalesManagerGoalType) HasArrivalGoal() bool`

HasArrivalGoal returns a boolean if a field has been set.

### GetProductionStartDate

`func (o *SalesManagerGoalType) GetProductionStartDate() string`

GetProductionStartDate returns the ProductionStartDate field if non-nil, zero value otherwise.

### GetProductionStartDateOk

`func (o *SalesManagerGoalType) GetProductionStartDateOk() (*string, bool)`

GetProductionStartDateOk returns a tuple with the ProductionStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionStartDate

`func (o *SalesManagerGoalType) SetProductionStartDate(v string)`

SetProductionStartDate sets ProductionStartDate field to given value.

### HasProductionStartDate

`func (o *SalesManagerGoalType) HasProductionStartDate() bool`

HasProductionStartDate returns a boolean if a field has been set.

### GetProductionEndDate

`func (o *SalesManagerGoalType) GetProductionEndDate() string`

GetProductionEndDate returns the ProductionEndDate field if non-nil, zero value otherwise.

### GetProductionEndDateOk

`func (o *SalesManagerGoalType) GetProductionEndDateOk() (*string, bool)`

GetProductionEndDateOk returns a tuple with the ProductionEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionEndDate

`func (o *SalesManagerGoalType) SetProductionEndDate(v string)`

SetProductionEndDate sets ProductionEndDate field to given value.

### HasProductionEndDate

`func (o *SalesManagerGoalType) HasProductionEndDate() bool`

HasProductionEndDate returns a boolean if a field has been set.

### GetProductionPeriodCode

`func (o *SalesManagerGoalType) GetProductionPeriodCode() string`

GetProductionPeriodCode returns the ProductionPeriodCode field if non-nil, zero value otherwise.

### GetProductionPeriodCodeOk

`func (o *SalesManagerGoalType) GetProductionPeriodCodeOk() (*string, bool)`

GetProductionPeriodCodeOk returns a tuple with the ProductionPeriodCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionPeriodCode

`func (o *SalesManagerGoalType) SetProductionPeriodCode(v string)`

SetProductionPeriodCode sets ProductionPeriodCode field to given value.

### HasProductionPeriodCode

`func (o *SalesManagerGoalType) HasProductionPeriodCode() bool`

HasProductionPeriodCode returns a boolean if a field has been set.

### GetArrivalStartDate

`func (o *SalesManagerGoalType) GetArrivalStartDate() string`

GetArrivalStartDate returns the ArrivalStartDate field if non-nil, zero value otherwise.

### GetArrivalStartDateOk

`func (o *SalesManagerGoalType) GetArrivalStartDateOk() (*string, bool)`

GetArrivalStartDateOk returns a tuple with the ArrivalStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalStartDate

`func (o *SalesManagerGoalType) SetArrivalStartDate(v string)`

SetArrivalStartDate sets ArrivalStartDate field to given value.

### HasArrivalStartDate

`func (o *SalesManagerGoalType) HasArrivalStartDate() bool`

HasArrivalStartDate returns a boolean if a field has been set.

### GetArrivalEndDate

`func (o *SalesManagerGoalType) GetArrivalEndDate() string`

GetArrivalEndDate returns the ArrivalEndDate field if non-nil, zero value otherwise.

### GetArrivalEndDateOk

`func (o *SalesManagerGoalType) GetArrivalEndDateOk() (*string, bool)`

GetArrivalEndDateOk returns a tuple with the ArrivalEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalEndDate

`func (o *SalesManagerGoalType) SetArrivalEndDate(v string)`

SetArrivalEndDate sets ArrivalEndDate field to given value.

### HasArrivalEndDate

`func (o *SalesManagerGoalType) HasArrivalEndDate() bool`

HasArrivalEndDate returns a boolean if a field has been set.

### GetArrivalPeriodCode

`func (o *SalesManagerGoalType) GetArrivalPeriodCode() string`

GetArrivalPeriodCode returns the ArrivalPeriodCode field if non-nil, zero value otherwise.

### GetArrivalPeriodCodeOk

`func (o *SalesManagerGoalType) GetArrivalPeriodCodeOk() (*string, bool)`

GetArrivalPeriodCodeOk returns a tuple with the ArrivalPeriodCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalPeriodCode

`func (o *SalesManagerGoalType) SetArrivalPeriodCode(v string)`

SetArrivalPeriodCode sets ArrivalPeriodCode field to given value.

### HasArrivalPeriodCode

`func (o *SalesManagerGoalType) HasArrivalPeriodCode() bool`

HasArrivalPeriodCode returns a boolean if a field has been set.

### GetMarketCode

`func (o *SalesManagerGoalType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *SalesManagerGoalType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *SalesManagerGoalType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *SalesManagerGoalType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetRoomNights

`func (o *SalesManagerGoalType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *SalesManagerGoalType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *SalesManagerGoalType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *SalesManagerGoalType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *SalesManagerGoalType) GetRoomRevenue() CurrencyAmountType`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *SalesManagerGoalType) GetRoomRevenueOk() (*CurrencyAmountType, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *SalesManagerGoalType) SetRoomRevenue(v CurrencyAmountType)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *SalesManagerGoalType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetAverageRate

`func (o *SalesManagerGoalType) GetAverageRate() CurrencyAmountType`

GetAverageRate returns the AverageRate field if non-nil, zero value otherwise.

### GetAverageRateOk

`func (o *SalesManagerGoalType) GetAverageRateOk() (*CurrencyAmountType, bool)`

GetAverageRateOk returns a tuple with the AverageRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRate

`func (o *SalesManagerGoalType) SetAverageRate(v CurrencyAmountType)`

SetAverageRate sets AverageRate field to given value.

### HasAverageRate

`func (o *SalesManagerGoalType) HasAverageRate() bool`

HasAverageRate returns a boolean if a field has been set.

### GetCateringCovers

`func (o *SalesManagerGoalType) GetCateringCovers() int32`

GetCateringCovers returns the CateringCovers field if non-nil, zero value otherwise.

### GetCateringCoversOk

`func (o *SalesManagerGoalType) GetCateringCoversOk() (*int32, bool)`

GetCateringCoversOk returns a tuple with the CateringCovers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCovers

`func (o *SalesManagerGoalType) SetCateringCovers(v int32)`

SetCateringCovers sets CateringCovers field to given value.

### HasCateringCovers

`func (o *SalesManagerGoalType) HasCateringCovers() bool`

HasCateringCovers returns a boolean if a field has been set.

### GetFBRevenue

`func (o *SalesManagerGoalType) GetFBRevenue() CurrencyAmountType`

GetFBRevenue returns the FBRevenue field if non-nil, zero value otherwise.

### GetFBRevenueOk

`func (o *SalesManagerGoalType) GetFBRevenueOk() (*CurrencyAmountType, bool)`

GetFBRevenueOk returns a tuple with the FBRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBRevenue

`func (o *SalesManagerGoalType) SetFBRevenue(v CurrencyAmountType)`

SetFBRevenue sets FBRevenue field to given value.

### HasFBRevenue

`func (o *SalesManagerGoalType) HasFBRevenue() bool`

HasFBRevenue returns a boolean if a field has been set.

### GetAverageFBCheck

`func (o *SalesManagerGoalType) GetAverageFBCheck() CurrencyAmountType`

GetAverageFBCheck returns the AverageFBCheck field if non-nil, zero value otherwise.

### GetAverageFBCheckOk

`func (o *SalesManagerGoalType) GetAverageFBCheckOk() (*CurrencyAmountType, bool)`

GetAverageFBCheckOk returns a tuple with the AverageFBCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageFBCheck

`func (o *SalesManagerGoalType) SetAverageFBCheck(v CurrencyAmountType)`

SetAverageFBCheck sets AverageFBCheck field to given value.

### HasAverageFBCheck

`func (o *SalesManagerGoalType) HasAverageFBCheck() bool`

HasAverageFBCheck returns a boolean if a field has been set.

### GetOtherRevenue

`func (o *SalesManagerGoalType) GetOtherRevenue() CurrencyAmountType`

GetOtherRevenue returns the OtherRevenue field if non-nil, zero value otherwise.

### GetOtherRevenueOk

`func (o *SalesManagerGoalType) GetOtherRevenueOk() (*CurrencyAmountType, bool)`

GetOtherRevenueOk returns a tuple with the OtherRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherRevenue

`func (o *SalesManagerGoalType) SetOtherRevenue(v CurrencyAmountType)`

SetOtherRevenue sets OtherRevenue field to given value.

### HasOtherRevenue

`func (o *SalesManagerGoalType) HasOtherRevenue() bool`

HasOtherRevenue returns a boolean if a field has been set.

### GetActivityType

`func (o *SalesManagerGoalType) GetActivityType() string`

GetActivityType returns the ActivityType field if non-nil, zero value otherwise.

### GetActivityTypeOk

`func (o *SalesManagerGoalType) GetActivityTypeOk() (*string, bool)`

GetActivityTypeOk returns a tuple with the ActivityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityType

`func (o *SalesManagerGoalType) SetActivityType(v string)`

SetActivityType sets ActivityType field to given value.

### HasActivityType

`func (o *SalesManagerGoalType) HasActivityType() bool`

HasActivityType returns a boolean if a field has been set.

### GetActivitiesCount

`func (o *SalesManagerGoalType) GetActivitiesCount() int32`

GetActivitiesCount returns the ActivitiesCount field if non-nil, zero value otherwise.

### GetActivitiesCountOk

`func (o *SalesManagerGoalType) GetActivitiesCountOk() (*int32, bool)`

GetActivitiesCountOk returns a tuple with the ActivitiesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesCount

`func (o *SalesManagerGoalType) SetActivitiesCount(v int32)`

SetActivitiesCount sets ActivitiesCount field to given value.

### HasActivitiesCount

`func (o *SalesManagerGoalType) HasActivitiesCount() bool`

HasActivitiesCount returns a boolean if a field has been set.

### GetGroupRoomsWithCatering

`func (o *SalesManagerGoalType) GetGroupRoomsWithCatering() bool`

GetGroupRoomsWithCatering returns the GroupRoomsWithCatering field if non-nil, zero value otherwise.

### GetGroupRoomsWithCateringOk

`func (o *SalesManagerGoalType) GetGroupRoomsWithCateringOk() (*bool, bool)`

GetGroupRoomsWithCateringOk returns a tuple with the GroupRoomsWithCatering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupRoomsWithCatering

`func (o *SalesManagerGoalType) SetGroupRoomsWithCatering(v bool)`

SetGroupRoomsWithCatering sets GroupRoomsWithCatering field to given value.

### HasGroupRoomsWithCatering

`func (o *SalesManagerGoalType) HasGroupRoomsWithCatering() bool`

HasGroupRoomsWithCatering returns a boolean if a field has been set.

### GetTransientRoom

`func (o *SalesManagerGoalType) GetTransientRoom() bool`

GetTransientRoom returns the TransientRoom field if non-nil, zero value otherwise.

### GetTransientRoomOk

`func (o *SalesManagerGoalType) GetTransientRoomOk() (*bool, bool)`

GetTransientRoomOk returns a tuple with the TransientRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransientRoom

`func (o *SalesManagerGoalType) SetTransientRoom(v bool)`

SetTransientRoom sets TransientRoom field to given value.

### HasTransientRoom

`func (o *SalesManagerGoalType) HasTransientRoom() bool`

HasTransientRoom returns a boolean if a field has been set.

### GetActivity

`func (o *SalesManagerGoalType) GetActivity() bool`

GetActivity returns the Activity field if non-nil, zero value otherwise.

### GetActivityOk

`func (o *SalesManagerGoalType) GetActivityOk() (*bool, bool)`

GetActivityOk returns a tuple with the Activity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivity

`func (o *SalesManagerGoalType) SetActivity(v bool)`

SetActivity sets Activity field to given value.

### HasActivity

`func (o *SalesManagerGoalType) HasActivity() bool`

HasActivity returns a boolean if a field has been set.

### GetFuture

`func (o *SalesManagerGoalType) GetFuture() bool`

GetFuture returns the Future field if non-nil, zero value otherwise.

### GetFutureOk

`func (o *SalesManagerGoalType) GetFutureOk() (*bool, bool)`

GetFutureOk returns a tuple with the Future field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFuture

`func (o *SalesManagerGoalType) SetFuture(v bool)`

SetFuture sets Future field to given value.

### HasFuture

`func (o *SalesManagerGoalType) HasFuture() bool`

HasFuture returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



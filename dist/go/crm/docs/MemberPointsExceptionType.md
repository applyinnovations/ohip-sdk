# MemberPointsExceptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code of the membership transaction exceptions. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Name** | Pointer to **string** | The profile name associated with this membership. | [optional] 
**FromToRangeDate** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**MembershipIdNo** | Pointer to **float32** | Unique identifier of this membership. | [optional] 
**MembershipType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**MembershipTransactionId** | Pointer to [**MembershipTransactionId**](MembershipTransactionId.md) |  | [optional] 
**RoomsBooked** | Pointer to **int32** | The number of rooms booked.(MR) | [optional] 
**BackToBack** | Pointer to **bool** | Indicates if back to back membership transaction exceptions have occurred or not. | [optional] 
**AverageRate** | Pointer to **float32** | The average rate of the stay. | [optional] 
**AwardPoints** | Pointer to **float32** | Award points associated with this membership points transaction. | [optional] 
**TierNightPoints** | Pointer to **float32** | Tier night points associated with this membership points transaction. | [optional] 
**TierStayPoints** | Pointer to **float32** | Tier stay points associated with this membership points transaction. | [optional] 
**TierRevenuePoints** | Pointer to **float32** | Tier revenue points associated with this membership points transaction. | [optional] 
**PointsCalculate** | Pointer to **bool** | Points Calculated value(Y/N) for the selected transaction. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProcessingMessages** | Pointer to **string** | The systems records and notes identifying the exception criteria. | [optional] 
**ExceptionStatus** | Pointer to [**MembershipExceptionStatusType**](MembershipExceptionStatusType.md) |  | [optional] 

## Methods

### NewMemberPointsExceptionType

`func NewMemberPointsExceptionType() *MemberPointsExceptionType`

NewMemberPointsExceptionType instantiates a new MemberPointsExceptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberPointsExceptionTypeWithDefaults

`func NewMemberPointsExceptionTypeWithDefaults() *MemberPointsExceptionType`

NewMemberPointsExceptionTypeWithDefaults instantiates a new MemberPointsExceptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MemberPointsExceptionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MemberPointsExceptionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MemberPointsExceptionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MemberPointsExceptionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *MemberPointsExceptionType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *MemberPointsExceptionType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *MemberPointsExceptionType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *MemberPointsExceptionType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetName

`func (o *MemberPointsExceptionType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MemberPointsExceptionType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MemberPointsExceptionType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MemberPointsExceptionType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFromToRangeDate

`func (o *MemberPointsExceptionType) GetFromToRangeDate() DateRangeType`

GetFromToRangeDate returns the FromToRangeDate field if non-nil, zero value otherwise.

### GetFromToRangeDateOk

`func (o *MemberPointsExceptionType) GetFromToRangeDateOk() (*DateRangeType, bool)`

GetFromToRangeDateOk returns a tuple with the FromToRangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromToRangeDate

`func (o *MemberPointsExceptionType) SetFromToRangeDate(v DateRangeType)`

SetFromToRangeDate sets FromToRangeDate field to given value.

### HasFromToRangeDate

`func (o *MemberPointsExceptionType) HasFromToRangeDate() bool`

HasFromToRangeDate returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *MemberPointsExceptionType) GetMembershipIdNo() float32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *MemberPointsExceptionType) GetMembershipIdNoOk() (*float32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *MemberPointsExceptionType) SetMembershipIdNo(v float32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *MemberPointsExceptionType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipType

`func (o *MemberPointsExceptionType) GetMembershipType() CodeDescriptionType`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MemberPointsExceptionType) GetMembershipTypeOk() (*CodeDescriptionType, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MemberPointsExceptionType) SetMembershipType(v CodeDescriptionType)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MemberPointsExceptionType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *MemberPointsExceptionType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *MemberPointsExceptionType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *MemberPointsExceptionType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *MemberPointsExceptionType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MemberPointsExceptionType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MemberPointsExceptionType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MemberPointsExceptionType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MemberPointsExceptionType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipTransactionId

`func (o *MemberPointsExceptionType) GetMembershipTransactionId() MembershipTransactionId`

GetMembershipTransactionId returns the MembershipTransactionId field if non-nil, zero value otherwise.

### GetMembershipTransactionIdOk

`func (o *MemberPointsExceptionType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool)`

GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionId

`func (o *MemberPointsExceptionType) SetMembershipTransactionId(v MembershipTransactionId)`

SetMembershipTransactionId sets MembershipTransactionId field to given value.

### HasMembershipTransactionId

`func (o *MemberPointsExceptionType) HasMembershipTransactionId() bool`

HasMembershipTransactionId returns a boolean if a field has been set.

### GetRoomsBooked

`func (o *MemberPointsExceptionType) GetRoomsBooked() int32`

GetRoomsBooked returns the RoomsBooked field if non-nil, zero value otherwise.

### GetRoomsBookedOk

`func (o *MemberPointsExceptionType) GetRoomsBookedOk() (*int32, bool)`

GetRoomsBookedOk returns a tuple with the RoomsBooked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsBooked

`func (o *MemberPointsExceptionType) SetRoomsBooked(v int32)`

SetRoomsBooked sets RoomsBooked field to given value.

### HasRoomsBooked

`func (o *MemberPointsExceptionType) HasRoomsBooked() bool`

HasRoomsBooked returns a boolean if a field has been set.

### GetBackToBack

`func (o *MemberPointsExceptionType) GetBackToBack() bool`

GetBackToBack returns the BackToBack field if non-nil, zero value otherwise.

### GetBackToBackOk

`func (o *MemberPointsExceptionType) GetBackToBackOk() (*bool, bool)`

GetBackToBackOk returns a tuple with the BackToBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBack

`func (o *MemberPointsExceptionType) SetBackToBack(v bool)`

SetBackToBack sets BackToBack field to given value.

### HasBackToBack

`func (o *MemberPointsExceptionType) HasBackToBack() bool`

HasBackToBack returns a boolean if a field has been set.

### GetAverageRate

`func (o *MemberPointsExceptionType) GetAverageRate() float32`

GetAverageRate returns the AverageRate field if non-nil, zero value otherwise.

### GetAverageRateOk

`func (o *MemberPointsExceptionType) GetAverageRateOk() (*float32, bool)`

GetAverageRateOk returns a tuple with the AverageRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRate

`func (o *MemberPointsExceptionType) SetAverageRate(v float32)`

SetAverageRate sets AverageRate field to given value.

### HasAverageRate

`func (o *MemberPointsExceptionType) HasAverageRate() bool`

HasAverageRate returns a boolean if a field has been set.

### GetAwardPoints

`func (o *MemberPointsExceptionType) GetAwardPoints() float32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *MemberPointsExceptionType) GetAwardPointsOk() (*float32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *MemberPointsExceptionType) SetAwardPoints(v float32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *MemberPointsExceptionType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetTierNightPoints

`func (o *MemberPointsExceptionType) GetTierNightPoints() float32`

GetTierNightPoints returns the TierNightPoints field if non-nil, zero value otherwise.

### GetTierNightPointsOk

`func (o *MemberPointsExceptionType) GetTierNightPointsOk() (*float32, bool)`

GetTierNightPointsOk returns a tuple with the TierNightPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierNightPoints

`func (o *MemberPointsExceptionType) SetTierNightPoints(v float32)`

SetTierNightPoints sets TierNightPoints field to given value.

### HasTierNightPoints

`func (o *MemberPointsExceptionType) HasTierNightPoints() bool`

HasTierNightPoints returns a boolean if a field has been set.

### GetTierStayPoints

`func (o *MemberPointsExceptionType) GetTierStayPoints() float32`

GetTierStayPoints returns the TierStayPoints field if non-nil, zero value otherwise.

### GetTierStayPointsOk

`func (o *MemberPointsExceptionType) GetTierStayPointsOk() (*float32, bool)`

GetTierStayPointsOk returns a tuple with the TierStayPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierStayPoints

`func (o *MemberPointsExceptionType) SetTierStayPoints(v float32)`

SetTierStayPoints sets TierStayPoints field to given value.

### HasTierStayPoints

`func (o *MemberPointsExceptionType) HasTierStayPoints() bool`

HasTierStayPoints returns a boolean if a field has been set.

### GetTierRevenuePoints

`func (o *MemberPointsExceptionType) GetTierRevenuePoints() float32`

GetTierRevenuePoints returns the TierRevenuePoints field if non-nil, zero value otherwise.

### GetTierRevenuePointsOk

`func (o *MemberPointsExceptionType) GetTierRevenuePointsOk() (*float32, bool)`

GetTierRevenuePointsOk returns a tuple with the TierRevenuePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierRevenuePoints

`func (o *MemberPointsExceptionType) SetTierRevenuePoints(v float32)`

SetTierRevenuePoints sets TierRevenuePoints field to given value.

### HasTierRevenuePoints

`func (o *MemberPointsExceptionType) HasTierRevenuePoints() bool`

HasTierRevenuePoints returns a boolean if a field has been set.

### GetPointsCalculate

`func (o *MemberPointsExceptionType) GetPointsCalculate() bool`

GetPointsCalculate returns the PointsCalculate field if non-nil, zero value otherwise.

### GetPointsCalculateOk

`func (o *MemberPointsExceptionType) GetPointsCalculateOk() (*bool, bool)`

GetPointsCalculateOk returns a tuple with the PointsCalculate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsCalculate

`func (o *MemberPointsExceptionType) SetPointsCalculate(v bool)`

SetPointsCalculate sets PointsCalculate field to given value.

### HasPointsCalculate

`func (o *MemberPointsExceptionType) HasPointsCalculate() bool`

HasPointsCalculate returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MemberPointsExceptionType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MemberPointsExceptionType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MemberPointsExceptionType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MemberPointsExceptionType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetProcessingMessages

`func (o *MemberPointsExceptionType) GetProcessingMessages() string`

GetProcessingMessages returns the ProcessingMessages field if non-nil, zero value otherwise.

### GetProcessingMessagesOk

`func (o *MemberPointsExceptionType) GetProcessingMessagesOk() (*string, bool)`

GetProcessingMessagesOk returns a tuple with the ProcessingMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingMessages

`func (o *MemberPointsExceptionType) SetProcessingMessages(v string)`

SetProcessingMessages sets ProcessingMessages field to given value.

### HasProcessingMessages

`func (o *MemberPointsExceptionType) HasProcessingMessages() bool`

HasProcessingMessages returns a boolean if a field has been set.

### GetExceptionStatus

`func (o *MemberPointsExceptionType) GetExceptionStatus() MembershipExceptionStatusType`

GetExceptionStatus returns the ExceptionStatus field if non-nil, zero value otherwise.

### GetExceptionStatusOk

`func (o *MemberPointsExceptionType) GetExceptionStatusOk() (*MembershipExceptionStatusType, bool)`

GetExceptionStatusOk returns a tuple with the ExceptionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptionStatus

`func (o *MemberPointsExceptionType) SetExceptionStatus(v MembershipExceptionStatusType)`

SetExceptionStatus sets ExceptionStatus field to given value.

### HasExceptionStatus

`func (o *MemberPointsExceptionType) HasExceptionStatus() bool`

HasExceptionStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



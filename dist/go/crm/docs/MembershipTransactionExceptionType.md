# MembershipTransactionExceptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AverageRate** | Pointer to **float32** | The average rate of the stay. | [optional] 
**AwardBasePoints** | Pointer to **float32** | The total number of base award points for this membership points transaction. | [optional] 
**AwardBonusPoints** | Pointer to **float32** | Indicates if this transaction involves bonus points, The total number of bonus points. | [optional] 
**BackToBack** | Pointer to **string** | Indicates if back to back membership transaction exceptions have occurred or not. | [optional] 
**CardExpirationDate** | Pointer to **string** | Membership card expiration date. | [optional] 
**ComputedPoints** | Pointer to [**MembershipTransactionExceptionComputePointsType**](MembershipTransactionExceptionComputePointsType.md) |  | [optional] 
**ExceptionType** | Pointer to **int32** | Indicates the type of Exception like Exception not resolved,Points Rejected on Exception etc., | [optional] 
**FromToRangeDate** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the membership transaction exceptions. | [optional] 
**JoinedDate** | Pointer to **string** | Date when the member enrolled for the membership. | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**MembershipId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**MembershipTransactionId** | Pointer to [**MembershipTransactionId**](MembershipTransactionId.md) |  | [optional] 
**MembershipType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Name** | Pointer to **string** | The profile name associated with this membership. | [optional] 
**PointsCalculate** | Pointer to **bool** | Points Calculated value(Y/N) for the selected transaction. | [optional] 
**ProcessingMessages** | Pointer to **string** | The systems records and notes identifying the exception criteria. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationNumber** | Pointer to **string** | Any reference like reservation no etc against which the certificate was consumed. | [optional] 
**RoomsBooked** | Pointer to **int32** | If multiple room membership transaction exceptions occurred, the number of rooms booked.(MR) | [optional] 
**TierPoints** | Pointer to [**MembershipTransactionTierPointsType**](MembershipTransactionTierPointsType.md) |  | [optional] 
**TierStays** | Pointer to **float32** | Tier stay points associated with this membership points transaction. | [optional] 
**TotalAwardPoints** | Pointer to **float32** | Award points associated with this membership points transaction. | [optional] 
**TotalNights** | Pointer to **float32** | Tier night points associated with this membership points transaction. | [optional] 
**TotalPoints** | Pointer to **float32** | The total number of award points associated with this transaction. | [optional] 
**TotalRevenue** | Pointer to **float32** | Tier revenue points associated with this membership points transaction. | [optional] 
**UserNotes** | Pointer to **string** | Notes regarding the resolution of the membership transaction exception or for any other reason. | [optional] 

## Methods

### NewMembershipTransactionExceptionType

`func NewMembershipTransactionExceptionType() *MembershipTransactionExceptionType`

NewMembershipTransactionExceptionType instantiates a new MembershipTransactionExceptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionExceptionTypeWithDefaults

`func NewMembershipTransactionExceptionTypeWithDefaults() *MembershipTransactionExceptionType`

NewMembershipTransactionExceptionTypeWithDefaults instantiates a new MembershipTransactionExceptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAverageRate

`func (o *MembershipTransactionExceptionType) GetAverageRate() float32`

GetAverageRate returns the AverageRate field if non-nil, zero value otherwise.

### GetAverageRateOk

`func (o *MembershipTransactionExceptionType) GetAverageRateOk() (*float32, bool)`

GetAverageRateOk returns a tuple with the AverageRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRate

`func (o *MembershipTransactionExceptionType) SetAverageRate(v float32)`

SetAverageRate sets AverageRate field to given value.

### HasAverageRate

`func (o *MembershipTransactionExceptionType) HasAverageRate() bool`

HasAverageRate returns a boolean if a field has been set.

### GetAwardBasePoints

`func (o *MembershipTransactionExceptionType) GetAwardBasePoints() float32`

GetAwardBasePoints returns the AwardBasePoints field if non-nil, zero value otherwise.

### GetAwardBasePointsOk

`func (o *MembershipTransactionExceptionType) GetAwardBasePointsOk() (*float32, bool)`

GetAwardBasePointsOk returns a tuple with the AwardBasePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBasePoints

`func (o *MembershipTransactionExceptionType) SetAwardBasePoints(v float32)`

SetAwardBasePoints sets AwardBasePoints field to given value.

### HasAwardBasePoints

`func (o *MembershipTransactionExceptionType) HasAwardBasePoints() bool`

HasAwardBasePoints returns a boolean if a field has been set.

### GetAwardBonusPoints

`func (o *MembershipTransactionExceptionType) GetAwardBonusPoints() float32`

GetAwardBonusPoints returns the AwardBonusPoints field if non-nil, zero value otherwise.

### GetAwardBonusPointsOk

`func (o *MembershipTransactionExceptionType) GetAwardBonusPointsOk() (*float32, bool)`

GetAwardBonusPointsOk returns a tuple with the AwardBonusPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBonusPoints

`func (o *MembershipTransactionExceptionType) SetAwardBonusPoints(v float32)`

SetAwardBonusPoints sets AwardBonusPoints field to given value.

### HasAwardBonusPoints

`func (o *MembershipTransactionExceptionType) HasAwardBonusPoints() bool`

HasAwardBonusPoints returns a boolean if a field has been set.

### GetBackToBack

`func (o *MembershipTransactionExceptionType) GetBackToBack() string`

GetBackToBack returns the BackToBack field if non-nil, zero value otherwise.

### GetBackToBackOk

`func (o *MembershipTransactionExceptionType) GetBackToBackOk() (*string, bool)`

GetBackToBackOk returns a tuple with the BackToBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBack

`func (o *MembershipTransactionExceptionType) SetBackToBack(v string)`

SetBackToBack sets BackToBack field to given value.

### HasBackToBack

`func (o *MembershipTransactionExceptionType) HasBackToBack() bool`

HasBackToBack returns a boolean if a field has been set.

### GetCardExpirationDate

`func (o *MembershipTransactionExceptionType) GetCardExpirationDate() string`

GetCardExpirationDate returns the CardExpirationDate field if non-nil, zero value otherwise.

### GetCardExpirationDateOk

`func (o *MembershipTransactionExceptionType) GetCardExpirationDateOk() (*string, bool)`

GetCardExpirationDateOk returns a tuple with the CardExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationDate

`func (o *MembershipTransactionExceptionType) SetCardExpirationDate(v string)`

SetCardExpirationDate sets CardExpirationDate field to given value.

### HasCardExpirationDate

`func (o *MembershipTransactionExceptionType) HasCardExpirationDate() bool`

HasCardExpirationDate returns a boolean if a field has been set.

### GetComputedPoints

`func (o *MembershipTransactionExceptionType) GetComputedPoints() MembershipTransactionExceptionComputePointsType`

GetComputedPoints returns the ComputedPoints field if non-nil, zero value otherwise.

### GetComputedPointsOk

`func (o *MembershipTransactionExceptionType) GetComputedPointsOk() (*MembershipTransactionExceptionComputePointsType, bool)`

GetComputedPointsOk returns a tuple with the ComputedPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedPoints

`func (o *MembershipTransactionExceptionType) SetComputedPoints(v MembershipTransactionExceptionComputePointsType)`

SetComputedPoints sets ComputedPoints field to given value.

### HasComputedPoints

`func (o *MembershipTransactionExceptionType) HasComputedPoints() bool`

HasComputedPoints returns a boolean if a field has been set.

### GetExceptionType

`func (o *MembershipTransactionExceptionType) GetExceptionType() int32`

GetExceptionType returns the ExceptionType field if non-nil, zero value otherwise.

### GetExceptionTypeOk

`func (o *MembershipTransactionExceptionType) GetExceptionTypeOk() (*int32, bool)`

GetExceptionTypeOk returns a tuple with the ExceptionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptionType

`func (o *MembershipTransactionExceptionType) SetExceptionType(v int32)`

SetExceptionType sets ExceptionType field to given value.

### HasExceptionType

`func (o *MembershipTransactionExceptionType) HasExceptionType() bool`

HasExceptionType returns a boolean if a field has been set.

### GetFromToRangeDate

`func (o *MembershipTransactionExceptionType) GetFromToRangeDate() DateRangeType`

GetFromToRangeDate returns the FromToRangeDate field if non-nil, zero value otherwise.

### GetFromToRangeDateOk

`func (o *MembershipTransactionExceptionType) GetFromToRangeDateOk() (*DateRangeType, bool)`

GetFromToRangeDateOk returns a tuple with the FromToRangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromToRangeDate

`func (o *MembershipTransactionExceptionType) SetFromToRangeDate(v DateRangeType)`

SetFromToRangeDate sets FromToRangeDate field to given value.

### HasFromToRangeDate

`func (o *MembershipTransactionExceptionType) HasFromToRangeDate() bool`

HasFromToRangeDate returns a boolean if a field has been set.

### GetHotelId

`func (o *MembershipTransactionExceptionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipTransactionExceptionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipTransactionExceptionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipTransactionExceptionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetJoinedDate

`func (o *MembershipTransactionExceptionType) GetJoinedDate() string`

GetJoinedDate returns the JoinedDate field if non-nil, zero value otherwise.

### GetJoinedDateOk

`func (o *MembershipTransactionExceptionType) GetJoinedDateOk() (*string, bool)`

GetJoinedDateOk returns a tuple with the JoinedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinedDate

`func (o *MembershipTransactionExceptionType) SetJoinedDate(v string)`

SetJoinedDate sets JoinedDate field to given value.

### HasJoinedDate

`func (o *MembershipTransactionExceptionType) HasJoinedDate() bool`

HasJoinedDate returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *MembershipTransactionExceptionType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *MembershipTransactionExceptionType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *MembershipTransactionExceptionType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *MembershipTransactionExceptionType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetMembershipId

`func (o *MembershipTransactionExceptionType) GetMembershipId() UniqueIDType`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipTransactionExceptionType) GetMembershipIdOk() (*UniqueIDType, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipTransactionExceptionType) SetMembershipId(v UniqueIDType)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipTransactionExceptionType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipTransactionExceptionType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipTransactionExceptionType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipTransactionExceptionType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipTransactionExceptionType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipTransactionId

`func (o *MembershipTransactionExceptionType) GetMembershipTransactionId() MembershipTransactionId`

GetMembershipTransactionId returns the MembershipTransactionId field if non-nil, zero value otherwise.

### GetMembershipTransactionIdOk

`func (o *MembershipTransactionExceptionType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool)`

GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionId

`func (o *MembershipTransactionExceptionType) SetMembershipTransactionId(v MembershipTransactionId)`

SetMembershipTransactionId sets MembershipTransactionId field to given value.

### HasMembershipTransactionId

`func (o *MembershipTransactionExceptionType) HasMembershipTransactionId() bool`

HasMembershipTransactionId returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipTransactionExceptionType) GetMembershipType() CodeDescriptionType`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipTransactionExceptionType) GetMembershipTypeOk() (*CodeDescriptionType, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipTransactionExceptionType) SetMembershipType(v CodeDescriptionType)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipTransactionExceptionType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetName

`func (o *MembershipTransactionExceptionType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MembershipTransactionExceptionType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MembershipTransactionExceptionType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MembershipTransactionExceptionType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPointsCalculate

`func (o *MembershipTransactionExceptionType) GetPointsCalculate() bool`

GetPointsCalculate returns the PointsCalculate field if non-nil, zero value otherwise.

### GetPointsCalculateOk

`func (o *MembershipTransactionExceptionType) GetPointsCalculateOk() (*bool, bool)`

GetPointsCalculateOk returns a tuple with the PointsCalculate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsCalculate

`func (o *MembershipTransactionExceptionType) SetPointsCalculate(v bool)`

SetPointsCalculate sets PointsCalculate field to given value.

### HasPointsCalculate

`func (o *MembershipTransactionExceptionType) HasPointsCalculate() bool`

HasPointsCalculate returns a boolean if a field has been set.

### GetProcessingMessages

`func (o *MembershipTransactionExceptionType) GetProcessingMessages() string`

GetProcessingMessages returns the ProcessingMessages field if non-nil, zero value otherwise.

### GetProcessingMessagesOk

`func (o *MembershipTransactionExceptionType) GetProcessingMessagesOk() (*string, bool)`

GetProcessingMessagesOk returns a tuple with the ProcessingMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingMessages

`func (o *MembershipTransactionExceptionType) SetProcessingMessages(v string)`

SetProcessingMessages sets ProcessingMessages field to given value.

### HasProcessingMessages

`func (o *MembershipTransactionExceptionType) HasProcessingMessages() bool`

HasProcessingMessages returns a boolean if a field has been set.

### GetProfileId

`func (o *MembershipTransactionExceptionType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *MembershipTransactionExceptionType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *MembershipTransactionExceptionType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *MembershipTransactionExceptionType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationNumber

`func (o *MembershipTransactionExceptionType) GetReservationNumber() string`

GetReservationNumber returns the ReservationNumber field if non-nil, zero value otherwise.

### GetReservationNumberOk

`func (o *MembershipTransactionExceptionType) GetReservationNumberOk() (*string, bool)`

GetReservationNumberOk returns a tuple with the ReservationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNumber

`func (o *MembershipTransactionExceptionType) SetReservationNumber(v string)`

SetReservationNumber sets ReservationNumber field to given value.

### HasReservationNumber

`func (o *MembershipTransactionExceptionType) HasReservationNumber() bool`

HasReservationNumber returns a boolean if a field has been set.

### GetRoomsBooked

`func (o *MembershipTransactionExceptionType) GetRoomsBooked() int32`

GetRoomsBooked returns the RoomsBooked field if non-nil, zero value otherwise.

### GetRoomsBookedOk

`func (o *MembershipTransactionExceptionType) GetRoomsBookedOk() (*int32, bool)`

GetRoomsBookedOk returns a tuple with the RoomsBooked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsBooked

`func (o *MembershipTransactionExceptionType) SetRoomsBooked(v int32)`

SetRoomsBooked sets RoomsBooked field to given value.

### HasRoomsBooked

`func (o *MembershipTransactionExceptionType) HasRoomsBooked() bool`

HasRoomsBooked returns a boolean if a field has been set.

### GetTierPoints

`func (o *MembershipTransactionExceptionType) GetTierPoints() MembershipTransactionTierPointsType`

GetTierPoints returns the TierPoints field if non-nil, zero value otherwise.

### GetTierPointsOk

`func (o *MembershipTransactionExceptionType) GetTierPointsOk() (*MembershipTransactionTierPointsType, bool)`

GetTierPointsOk returns a tuple with the TierPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierPoints

`func (o *MembershipTransactionExceptionType) SetTierPoints(v MembershipTransactionTierPointsType)`

SetTierPoints sets TierPoints field to given value.

### HasTierPoints

`func (o *MembershipTransactionExceptionType) HasTierPoints() bool`

HasTierPoints returns a boolean if a field has been set.

### GetTierStays

`func (o *MembershipTransactionExceptionType) GetTierStays() float32`

GetTierStays returns the TierStays field if non-nil, zero value otherwise.

### GetTierStaysOk

`func (o *MembershipTransactionExceptionType) GetTierStaysOk() (*float32, bool)`

GetTierStaysOk returns a tuple with the TierStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierStays

`func (o *MembershipTransactionExceptionType) SetTierStays(v float32)`

SetTierStays sets TierStays field to given value.

### HasTierStays

`func (o *MembershipTransactionExceptionType) HasTierStays() bool`

HasTierStays returns a boolean if a field has been set.

### GetTotalAwardPoints

`func (o *MembershipTransactionExceptionType) GetTotalAwardPoints() float32`

GetTotalAwardPoints returns the TotalAwardPoints field if non-nil, zero value otherwise.

### GetTotalAwardPointsOk

`func (o *MembershipTransactionExceptionType) GetTotalAwardPointsOk() (*float32, bool)`

GetTotalAwardPointsOk returns a tuple with the TotalAwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAwardPoints

`func (o *MembershipTransactionExceptionType) SetTotalAwardPoints(v float32)`

SetTotalAwardPoints sets TotalAwardPoints field to given value.

### HasTotalAwardPoints

`func (o *MembershipTransactionExceptionType) HasTotalAwardPoints() bool`

HasTotalAwardPoints returns a boolean if a field has been set.

### GetTotalNights

`func (o *MembershipTransactionExceptionType) GetTotalNights() float32`

GetTotalNights returns the TotalNights field if non-nil, zero value otherwise.

### GetTotalNightsOk

`func (o *MembershipTransactionExceptionType) GetTotalNightsOk() (*float32, bool)`

GetTotalNightsOk returns a tuple with the TotalNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNights

`func (o *MembershipTransactionExceptionType) SetTotalNights(v float32)`

SetTotalNights sets TotalNights field to given value.

### HasTotalNights

`func (o *MembershipTransactionExceptionType) HasTotalNights() bool`

HasTotalNights returns a boolean if a field has been set.

### GetTotalPoints

`func (o *MembershipTransactionExceptionType) GetTotalPoints() float32`

GetTotalPoints returns the TotalPoints field if non-nil, zero value otherwise.

### GetTotalPointsOk

`func (o *MembershipTransactionExceptionType) GetTotalPointsOk() (*float32, bool)`

GetTotalPointsOk returns a tuple with the TotalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPoints

`func (o *MembershipTransactionExceptionType) SetTotalPoints(v float32)`

SetTotalPoints sets TotalPoints field to given value.

### HasTotalPoints

`func (o *MembershipTransactionExceptionType) HasTotalPoints() bool`

HasTotalPoints returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *MembershipTransactionExceptionType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *MembershipTransactionExceptionType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *MembershipTransactionExceptionType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *MembershipTransactionExceptionType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetUserNotes

`func (o *MembershipTransactionExceptionType) GetUserNotes() string`

GetUserNotes returns the UserNotes field if non-nil, zero value otherwise.

### GetUserNotesOk

`func (o *MembershipTransactionExceptionType) GetUserNotesOk() (*string, bool)`

GetUserNotesOk returns a tuple with the UserNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserNotes

`func (o *MembershipTransactionExceptionType) SetUserNotes(v string)`

SetUserNotes sets UserNotes field to given value.

### HasUserNotes

`func (o *MembershipTransactionExceptionType) HasUserNotes() bool`

HasUserNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



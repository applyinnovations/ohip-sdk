# ProfileTransactionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionDate** | Pointer to **string** | Stay Record or Membership Transaction Date. | [optional] 
**TransactionType** | Pointer to **string** | Stay Record or Membership Transaction Type. | [optional] 
**HotelId** | Pointer to **string** | Resort of the transaction. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**PointsCalculated** | Pointer to **bool** | Flag to indicate if points are calculated. | [optional] 
**StayTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**MembershipType** | Pointer to **string** | The type of membership. | [optional] 
**CardNumber** | Pointer to **string** | The membership card number. | [optional] 
**MembershipLevel** | Pointer to **string** | The level of the membership. | [optional] 
**AwardPoints** | Pointer to **int32** | Award points for the transactions. | [optional] 
**TierNightPoints** | Pointer to **int32** | Tier Night points for the transactions. | [optional] 
**TierStayPoints** | Pointer to **int32** | Tier Stay points for the transactions. | [optional] 
**TierRevenuePoints** | Pointer to **int32** | Tier Revenue points for the transactions. | [optional] 
**PointsCreditDate** | Pointer to **string** | Date when points were created. | [optional] 
**StayRecordId** | Pointer to **string** | Stay Record Id of the transaction. | [optional] 
**MembershipTransactionId** | Pointer to [**MembershipTransactionId**](MembershipTransactionId.md) |  | [optional] 
**MembershipId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewProfileTransactionsType

`func NewProfileTransactionsType() *ProfileTransactionsType`

NewProfileTransactionsType instantiates a new ProfileTransactionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTransactionsTypeWithDefaults

`func NewProfileTransactionsTypeWithDefaults() *ProfileTransactionsType`

NewProfileTransactionsTypeWithDefaults instantiates a new ProfileTransactionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionDate

`func (o *ProfileTransactionsType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ProfileTransactionsType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ProfileTransactionsType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ProfileTransactionsType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionType

`func (o *ProfileTransactionsType) GetTransactionType() string`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *ProfileTransactionsType) GetTransactionTypeOk() (*string, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *ProfileTransactionsType) SetTransactionType(v string)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *ProfileTransactionsType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetHotelId

`func (o *ProfileTransactionsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileTransactionsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileTransactionsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileTransactionsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ProfileTransactionsType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ProfileTransactionsType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ProfileTransactionsType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ProfileTransactionsType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetPointsCalculated

`func (o *ProfileTransactionsType) GetPointsCalculated() bool`

GetPointsCalculated returns the PointsCalculated field if non-nil, zero value otherwise.

### GetPointsCalculatedOk

`func (o *ProfileTransactionsType) GetPointsCalculatedOk() (*bool, bool)`

GetPointsCalculatedOk returns a tuple with the PointsCalculated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsCalculated

`func (o *ProfileTransactionsType) SetPointsCalculated(v bool)`

SetPointsCalculated sets PointsCalculated field to given value.

### HasPointsCalculated

`func (o *ProfileTransactionsType) HasPointsCalculated() bool`

HasPointsCalculated returns a boolean if a field has been set.

### GetStayTimeSpan

`func (o *ProfileTransactionsType) GetStayTimeSpan() TimeSpanType`

GetStayTimeSpan returns the StayTimeSpan field if non-nil, zero value otherwise.

### GetStayTimeSpanOk

`func (o *ProfileTransactionsType) GetStayTimeSpanOk() (*TimeSpanType, bool)`

GetStayTimeSpanOk returns a tuple with the StayTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayTimeSpan

`func (o *ProfileTransactionsType) SetStayTimeSpan(v TimeSpanType)`

SetStayTimeSpan sets StayTimeSpan field to given value.

### HasStayTimeSpan

`func (o *ProfileTransactionsType) HasStayTimeSpan() bool`

HasStayTimeSpan returns a boolean if a field has been set.

### GetMembershipType

`func (o *ProfileTransactionsType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ProfileTransactionsType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ProfileTransactionsType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ProfileTransactionsType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetCardNumber

`func (o *ProfileTransactionsType) GetCardNumber() string`

GetCardNumber returns the CardNumber field if non-nil, zero value otherwise.

### GetCardNumberOk

`func (o *ProfileTransactionsType) GetCardNumberOk() (*string, bool)`

GetCardNumberOk returns a tuple with the CardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumber

`func (o *ProfileTransactionsType) SetCardNumber(v string)`

SetCardNumber sets CardNumber field to given value.

### HasCardNumber

`func (o *ProfileTransactionsType) HasCardNumber() bool`

HasCardNumber returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ProfileTransactionsType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ProfileTransactionsType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ProfileTransactionsType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ProfileTransactionsType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetAwardPoints

`func (o *ProfileTransactionsType) GetAwardPoints() int32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *ProfileTransactionsType) GetAwardPointsOk() (*int32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *ProfileTransactionsType) SetAwardPoints(v int32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *ProfileTransactionsType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetTierNightPoints

`func (o *ProfileTransactionsType) GetTierNightPoints() int32`

GetTierNightPoints returns the TierNightPoints field if non-nil, zero value otherwise.

### GetTierNightPointsOk

`func (o *ProfileTransactionsType) GetTierNightPointsOk() (*int32, bool)`

GetTierNightPointsOk returns a tuple with the TierNightPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierNightPoints

`func (o *ProfileTransactionsType) SetTierNightPoints(v int32)`

SetTierNightPoints sets TierNightPoints field to given value.

### HasTierNightPoints

`func (o *ProfileTransactionsType) HasTierNightPoints() bool`

HasTierNightPoints returns a boolean if a field has been set.

### GetTierStayPoints

`func (o *ProfileTransactionsType) GetTierStayPoints() int32`

GetTierStayPoints returns the TierStayPoints field if non-nil, zero value otherwise.

### GetTierStayPointsOk

`func (o *ProfileTransactionsType) GetTierStayPointsOk() (*int32, bool)`

GetTierStayPointsOk returns a tuple with the TierStayPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierStayPoints

`func (o *ProfileTransactionsType) SetTierStayPoints(v int32)`

SetTierStayPoints sets TierStayPoints field to given value.

### HasTierStayPoints

`func (o *ProfileTransactionsType) HasTierStayPoints() bool`

HasTierStayPoints returns a boolean if a field has been set.

### GetTierRevenuePoints

`func (o *ProfileTransactionsType) GetTierRevenuePoints() int32`

GetTierRevenuePoints returns the TierRevenuePoints field if non-nil, zero value otherwise.

### GetTierRevenuePointsOk

`func (o *ProfileTransactionsType) GetTierRevenuePointsOk() (*int32, bool)`

GetTierRevenuePointsOk returns a tuple with the TierRevenuePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierRevenuePoints

`func (o *ProfileTransactionsType) SetTierRevenuePoints(v int32)`

SetTierRevenuePoints sets TierRevenuePoints field to given value.

### HasTierRevenuePoints

`func (o *ProfileTransactionsType) HasTierRevenuePoints() bool`

HasTierRevenuePoints returns a boolean if a field has been set.

### GetPointsCreditDate

`func (o *ProfileTransactionsType) GetPointsCreditDate() string`

GetPointsCreditDate returns the PointsCreditDate field if non-nil, zero value otherwise.

### GetPointsCreditDateOk

`func (o *ProfileTransactionsType) GetPointsCreditDateOk() (*string, bool)`

GetPointsCreditDateOk returns a tuple with the PointsCreditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsCreditDate

`func (o *ProfileTransactionsType) SetPointsCreditDate(v string)`

SetPointsCreditDate sets PointsCreditDate field to given value.

### HasPointsCreditDate

`func (o *ProfileTransactionsType) HasPointsCreditDate() bool`

HasPointsCreditDate returns a boolean if a field has been set.

### GetStayRecordId

`func (o *ProfileTransactionsType) GetStayRecordId() string`

GetStayRecordId returns the StayRecordId field if non-nil, zero value otherwise.

### GetStayRecordIdOk

`func (o *ProfileTransactionsType) GetStayRecordIdOk() (*string, bool)`

GetStayRecordIdOk returns a tuple with the StayRecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayRecordId

`func (o *ProfileTransactionsType) SetStayRecordId(v string)`

SetStayRecordId sets StayRecordId field to given value.

### HasStayRecordId

`func (o *ProfileTransactionsType) HasStayRecordId() bool`

HasStayRecordId returns a boolean if a field has been set.

### GetMembershipTransactionId

`func (o *ProfileTransactionsType) GetMembershipTransactionId() MembershipTransactionId`

GetMembershipTransactionId returns the MembershipTransactionId field if non-nil, zero value otherwise.

### GetMembershipTransactionIdOk

`func (o *ProfileTransactionsType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool)`

GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionId

`func (o *ProfileTransactionsType) SetMembershipTransactionId(v MembershipTransactionId)`

SetMembershipTransactionId sets MembershipTransactionId field to given value.

### HasMembershipTransactionId

`func (o *ProfileTransactionsType) HasMembershipTransactionId() bool`

HasMembershipTransactionId returns a boolean if a field has been set.

### GetMembershipId

`func (o *ProfileTransactionsType) GetMembershipId() UniqueIDType`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ProfileTransactionsType) GetMembershipIdOk() (*UniqueIDType, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ProfileTransactionsType) SetMembershipId(v UniqueIDType)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ProfileTransactionsType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ProfileTransactionsType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ProfileTransactionsType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ProfileTransactionsType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ProfileTransactionsType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



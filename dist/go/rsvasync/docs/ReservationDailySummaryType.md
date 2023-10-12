# ReservationDailySummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ResvStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**SharedYn** | Pointer to **string** | Indicates whether the reservation has any sharers. Y indicates true and N indicates false. | [optional] 
**SharersList** | Pointer to **string** | The unique identifier reservationId of the shared reservation. | [optional] 
**Arrival** | Pointer to **string** |  | [optional] 
**Departure** | Pointer to **string** |  | [optional] 
**CheckedOutDate** | Pointer to **string** | The date the reservation was checked out. | [optional] 
**CancellationDate** | Pointer to **string** | The date the reservation was canceled. | [optional] 
**BookingDate** | Pointer to **string** |  | [optional] 
**Nationality** | Pointer to **string** | Affiliation or ethnicity to a particular country. | [optional] 
**ResvType** | Pointer to **string** | Type of the reservation. | [optional] 
**NoOfRooms** | Pointer to **int32** | Number of rooms of the reservation. | [optional] 
**BlockCode** | Pointer to **string** | Block code of the reservation. | [optional] 
**GuestCountry** | Pointer to **string** | Country code for guest&#39;s primary address. | [optional] 
**TravelAgentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TravelAgentName** | Pointer to **string** | Name of the travel agent for the reservation. | [optional] 
**IataCode** | Pointer to **string** | IATA Code. | [optional] 
**CompanyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CompanyName** | Pointer to **string** | Name of the company for the reservation. | [optional] 
**GroupId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GroupName** | Pointer to **string** | Name of the group for the reservation. | [optional] 
**SourceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SourceName** | Pointer to **string** | Name of the source for the reservation. | [optional] 
**ResvContactId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ResvContactName** | Pointer to **string** | Name of the contact for the reservation. | [optional] 
**CreateDateTime** | Pointer to **string** | Business Date when the reservation was created. | [optional] 
**LastModifiedDateTime** | Pointer to **string** | Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned. | [optional] 
**LastModifiedDate** | Pointer to **string** | Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned. | [optional] 
**MembershipId** | Pointer to **string** | Card Number of the membership.Either membershipId or membershipNumber will be returned. | [optional] 
**MembershipNumber** | Pointer to **string** | Card Number of the membership.Either membershipId or membershipNumber will be returned. | [optional] 
**MembershipType** | Pointer to **string** | Type of membership. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates the membership level. | [optional] 
**Children1** | Pointer to **int32** | Number of children classified under the first Age Qualifying Group. | [optional] 
**Children2** | Pointer to **int32** | Number of children classified under the second Age Qualifying Group. | [optional] 
**Children3** | Pointer to **int32** | Number of children classified under the third Age Qualifying Group. | [optional] 
**CancellationReasonCode** | Pointer to **string** |  | [optional] 
**BookingMedium** | Pointer to **string** | Classifies the medium(Channel field on reservation screen) through which the reservation is made. Either bookingMedium or origin_of_booking will be present in the response. | [optional] 
**OriginOfBooking** | Pointer to **string** | Classifies the medium(Channel field on reservation screen) through which the reservation is made.Either bookingMedium or origin_of_booking will be present in the response. | [optional] 
**DailySummary** | Pointer to [**[]DailySummaryType**](DailySummaryType.md) | Collection of daily summary for the reservation. | [optional] 

## Methods

### NewReservationDailySummaryType

`func NewReservationDailySummaryType() *ReservationDailySummaryType`

NewReservationDailySummaryType instantiates a new ReservationDailySummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDailySummaryTypeWithDefaults

`func NewReservationDailySummaryTypeWithDefaults() *ReservationDailySummaryType`

NewReservationDailySummaryTypeWithDefaults instantiates a new ReservationDailySummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *ReservationDailySummaryType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationDailySummaryType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationDailySummaryType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationDailySummaryType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResvStatus

`func (o *ReservationDailySummaryType) GetResvStatus() PMSResStatusType`

GetResvStatus returns the ResvStatus field if non-nil, zero value otherwise.

### GetResvStatusOk

`func (o *ReservationDailySummaryType) GetResvStatusOk() (*PMSResStatusType, bool)`

GetResvStatusOk returns a tuple with the ResvStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvStatus

`func (o *ReservationDailySummaryType) SetResvStatus(v PMSResStatusType)`

SetResvStatus sets ResvStatus field to given value.

### HasResvStatus

`func (o *ReservationDailySummaryType) HasResvStatus() bool`

HasResvStatus returns a boolean if a field has been set.

### GetSharedYn

`func (o *ReservationDailySummaryType) GetSharedYn() string`

GetSharedYn returns the SharedYn field if non-nil, zero value otherwise.

### GetSharedYnOk

`func (o *ReservationDailySummaryType) GetSharedYnOk() (*string, bool)`

GetSharedYnOk returns a tuple with the SharedYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedYn

`func (o *ReservationDailySummaryType) SetSharedYn(v string)`

SetSharedYn sets SharedYn field to given value.

### HasSharedYn

`func (o *ReservationDailySummaryType) HasSharedYn() bool`

HasSharedYn returns a boolean if a field has been set.

### GetSharersList

`func (o *ReservationDailySummaryType) GetSharersList() string`

GetSharersList returns the SharersList field if non-nil, zero value otherwise.

### GetSharersListOk

`func (o *ReservationDailySummaryType) GetSharersListOk() (*string, bool)`

GetSharersListOk returns a tuple with the SharersList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharersList

`func (o *ReservationDailySummaryType) SetSharersList(v string)`

SetSharersList sets SharersList field to given value.

### HasSharersList

`func (o *ReservationDailySummaryType) HasSharersList() bool`

HasSharersList returns a boolean if a field has been set.

### GetArrival

`func (o *ReservationDailySummaryType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *ReservationDailySummaryType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *ReservationDailySummaryType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *ReservationDailySummaryType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetDeparture

`func (o *ReservationDailySummaryType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *ReservationDailySummaryType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *ReservationDailySummaryType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *ReservationDailySummaryType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetCheckedOutDate

`func (o *ReservationDailySummaryType) GetCheckedOutDate() string`

GetCheckedOutDate returns the CheckedOutDate field if non-nil, zero value otherwise.

### GetCheckedOutDateOk

`func (o *ReservationDailySummaryType) GetCheckedOutDateOk() (*string, bool)`

GetCheckedOutDateOk returns a tuple with the CheckedOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckedOutDate

`func (o *ReservationDailySummaryType) SetCheckedOutDate(v string)`

SetCheckedOutDate sets CheckedOutDate field to given value.

### HasCheckedOutDate

`func (o *ReservationDailySummaryType) HasCheckedOutDate() bool`

HasCheckedOutDate returns a boolean if a field has been set.

### GetCancellationDate

`func (o *ReservationDailySummaryType) GetCancellationDate() string`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *ReservationDailySummaryType) GetCancellationDateOk() (*string, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *ReservationDailySummaryType) SetCancellationDate(v string)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *ReservationDailySummaryType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetBookingDate

`func (o *ReservationDailySummaryType) GetBookingDate() string`

GetBookingDate returns the BookingDate field if non-nil, zero value otherwise.

### GetBookingDateOk

`func (o *ReservationDailySummaryType) GetBookingDateOk() (*string, bool)`

GetBookingDateOk returns a tuple with the BookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingDate

`func (o *ReservationDailySummaryType) SetBookingDate(v string)`

SetBookingDate sets BookingDate field to given value.

### HasBookingDate

`func (o *ReservationDailySummaryType) HasBookingDate() bool`

HasBookingDate returns a boolean if a field has been set.

### GetNationality

`func (o *ReservationDailySummaryType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *ReservationDailySummaryType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *ReservationDailySummaryType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *ReservationDailySummaryType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetResvType

`func (o *ReservationDailySummaryType) GetResvType() string`

GetResvType returns the ResvType field if non-nil, zero value otherwise.

### GetResvTypeOk

`func (o *ReservationDailySummaryType) GetResvTypeOk() (*string, bool)`

GetResvTypeOk returns a tuple with the ResvType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvType

`func (o *ReservationDailySummaryType) SetResvType(v string)`

SetResvType sets ResvType field to given value.

### HasResvType

`func (o *ReservationDailySummaryType) HasResvType() bool`

HasResvType returns a boolean if a field has been set.

### GetNoOfRooms

`func (o *ReservationDailySummaryType) GetNoOfRooms() int32`

GetNoOfRooms returns the NoOfRooms field if non-nil, zero value otherwise.

### GetNoOfRoomsOk

`func (o *ReservationDailySummaryType) GetNoOfRoomsOk() (*int32, bool)`

GetNoOfRoomsOk returns a tuple with the NoOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfRooms

`func (o *ReservationDailySummaryType) SetNoOfRooms(v int32)`

SetNoOfRooms sets NoOfRooms field to given value.

### HasNoOfRooms

`func (o *ReservationDailySummaryType) HasNoOfRooms() bool`

HasNoOfRooms returns a boolean if a field has been set.

### GetBlockCode

`func (o *ReservationDailySummaryType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *ReservationDailySummaryType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *ReservationDailySummaryType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *ReservationDailySummaryType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetGuestCountry

`func (o *ReservationDailySummaryType) GetGuestCountry() string`

GetGuestCountry returns the GuestCountry field if non-nil, zero value otherwise.

### GetGuestCountryOk

`func (o *ReservationDailySummaryType) GetGuestCountryOk() (*string, bool)`

GetGuestCountryOk returns a tuple with the GuestCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCountry

`func (o *ReservationDailySummaryType) SetGuestCountry(v string)`

SetGuestCountry sets GuestCountry field to given value.

### HasGuestCountry

`func (o *ReservationDailySummaryType) HasGuestCountry() bool`

HasGuestCountry returns a boolean if a field has been set.

### GetTravelAgentId

`func (o *ReservationDailySummaryType) GetTravelAgentId() UniqueIDType`

GetTravelAgentId returns the TravelAgentId field if non-nil, zero value otherwise.

### GetTravelAgentIdOk

`func (o *ReservationDailySummaryType) GetTravelAgentIdOk() (*UniqueIDType, bool)`

GetTravelAgentIdOk returns a tuple with the TravelAgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentId

`func (o *ReservationDailySummaryType) SetTravelAgentId(v UniqueIDType)`

SetTravelAgentId sets TravelAgentId field to given value.

### HasTravelAgentId

`func (o *ReservationDailySummaryType) HasTravelAgentId() bool`

HasTravelAgentId returns a boolean if a field has been set.

### GetTravelAgentName

`func (o *ReservationDailySummaryType) GetTravelAgentName() string`

GetTravelAgentName returns the TravelAgentName field if non-nil, zero value otherwise.

### GetTravelAgentNameOk

`func (o *ReservationDailySummaryType) GetTravelAgentNameOk() (*string, bool)`

GetTravelAgentNameOk returns a tuple with the TravelAgentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentName

`func (o *ReservationDailySummaryType) SetTravelAgentName(v string)`

SetTravelAgentName sets TravelAgentName field to given value.

### HasTravelAgentName

`func (o *ReservationDailySummaryType) HasTravelAgentName() bool`

HasTravelAgentName returns a boolean if a field has been set.

### GetIataCode

`func (o *ReservationDailySummaryType) GetIataCode() string`

GetIataCode returns the IataCode field if non-nil, zero value otherwise.

### GetIataCodeOk

`func (o *ReservationDailySummaryType) GetIataCodeOk() (*string, bool)`

GetIataCodeOk returns a tuple with the IataCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIataCode

`func (o *ReservationDailySummaryType) SetIataCode(v string)`

SetIataCode sets IataCode field to given value.

### HasIataCode

`func (o *ReservationDailySummaryType) HasIataCode() bool`

HasIataCode returns a boolean if a field has been set.

### GetCompanyId

`func (o *ReservationDailySummaryType) GetCompanyId() UniqueIDType`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *ReservationDailySummaryType) GetCompanyIdOk() (*UniqueIDType, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *ReservationDailySummaryType) SetCompanyId(v UniqueIDType)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *ReservationDailySummaryType) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetCompanyName

`func (o *ReservationDailySummaryType) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *ReservationDailySummaryType) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *ReservationDailySummaryType) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *ReservationDailySummaryType) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetGroupId

`func (o *ReservationDailySummaryType) GetGroupId() UniqueIDType`

GetGroupId returns the GroupId field if non-nil, zero value otherwise.

### GetGroupIdOk

`func (o *ReservationDailySummaryType) GetGroupIdOk() (*UniqueIDType, bool)`

GetGroupIdOk returns a tuple with the GroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupId

`func (o *ReservationDailySummaryType) SetGroupId(v UniqueIDType)`

SetGroupId sets GroupId field to given value.

### HasGroupId

`func (o *ReservationDailySummaryType) HasGroupId() bool`

HasGroupId returns a boolean if a field has been set.

### GetGroupName

`func (o *ReservationDailySummaryType) GetGroupName() string`

GetGroupName returns the GroupName field if non-nil, zero value otherwise.

### GetGroupNameOk

`func (o *ReservationDailySummaryType) GetGroupNameOk() (*string, bool)`

GetGroupNameOk returns a tuple with the GroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupName

`func (o *ReservationDailySummaryType) SetGroupName(v string)`

SetGroupName sets GroupName field to given value.

### HasGroupName

`func (o *ReservationDailySummaryType) HasGroupName() bool`

HasGroupName returns a boolean if a field has been set.

### GetSourceId

`func (o *ReservationDailySummaryType) GetSourceId() UniqueIDType`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *ReservationDailySummaryType) GetSourceIdOk() (*UniqueIDType, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *ReservationDailySummaryType) SetSourceId(v UniqueIDType)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *ReservationDailySummaryType) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *ReservationDailySummaryType) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ReservationDailySummaryType) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ReservationDailySummaryType) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ReservationDailySummaryType) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetResvContactId

`func (o *ReservationDailySummaryType) GetResvContactId() UniqueIDType`

GetResvContactId returns the ResvContactId field if non-nil, zero value otherwise.

### GetResvContactIdOk

`func (o *ReservationDailySummaryType) GetResvContactIdOk() (*UniqueIDType, bool)`

GetResvContactIdOk returns a tuple with the ResvContactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvContactId

`func (o *ReservationDailySummaryType) SetResvContactId(v UniqueIDType)`

SetResvContactId sets ResvContactId field to given value.

### HasResvContactId

`func (o *ReservationDailySummaryType) HasResvContactId() bool`

HasResvContactId returns a boolean if a field has been set.

### GetResvContactName

`func (o *ReservationDailySummaryType) GetResvContactName() string`

GetResvContactName returns the ResvContactName field if non-nil, zero value otherwise.

### GetResvContactNameOk

`func (o *ReservationDailySummaryType) GetResvContactNameOk() (*string, bool)`

GetResvContactNameOk returns a tuple with the ResvContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvContactName

`func (o *ReservationDailySummaryType) SetResvContactName(v string)`

SetResvContactName sets ResvContactName field to given value.

### HasResvContactName

`func (o *ReservationDailySummaryType) HasResvContactName() bool`

HasResvContactName returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ReservationDailySummaryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ReservationDailySummaryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ReservationDailySummaryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ReservationDailySummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetLastModifiedDateTime

`func (o *ReservationDailySummaryType) GetLastModifiedDateTime() string`

GetLastModifiedDateTime returns the LastModifiedDateTime field if non-nil, zero value otherwise.

### GetLastModifiedDateTimeOk

`func (o *ReservationDailySummaryType) GetLastModifiedDateTimeOk() (*string, bool)`

GetLastModifiedDateTimeOk returns a tuple with the LastModifiedDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedDateTime

`func (o *ReservationDailySummaryType) SetLastModifiedDateTime(v string)`

SetLastModifiedDateTime sets LastModifiedDateTime field to given value.

### HasLastModifiedDateTime

`func (o *ReservationDailySummaryType) HasLastModifiedDateTime() bool`

HasLastModifiedDateTime returns a boolean if a field has been set.

### GetLastModifiedDate

`func (o *ReservationDailySummaryType) GetLastModifiedDate() string`

GetLastModifiedDate returns the LastModifiedDate field if non-nil, zero value otherwise.

### GetLastModifiedDateOk

`func (o *ReservationDailySummaryType) GetLastModifiedDateOk() (*string, bool)`

GetLastModifiedDateOk returns a tuple with the LastModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedDate

`func (o *ReservationDailySummaryType) SetLastModifiedDate(v string)`

SetLastModifiedDate sets LastModifiedDate field to given value.

### HasLastModifiedDate

`func (o *ReservationDailySummaryType) HasLastModifiedDate() bool`

HasLastModifiedDate returns a boolean if a field has been set.

### GetMembershipId

`func (o *ReservationDailySummaryType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ReservationDailySummaryType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ReservationDailySummaryType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ReservationDailySummaryType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipNumber

`func (o *ReservationDailySummaryType) GetMembershipNumber() string`

GetMembershipNumber returns the MembershipNumber field if non-nil, zero value otherwise.

### GetMembershipNumberOk

`func (o *ReservationDailySummaryType) GetMembershipNumberOk() (*string, bool)`

GetMembershipNumberOk returns a tuple with the MembershipNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipNumber

`func (o *ReservationDailySummaryType) SetMembershipNumber(v string)`

SetMembershipNumber sets MembershipNumber field to given value.

### HasMembershipNumber

`func (o *ReservationDailySummaryType) HasMembershipNumber() bool`

HasMembershipNumber returns a boolean if a field has been set.

### GetMembershipType

`func (o *ReservationDailySummaryType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ReservationDailySummaryType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ReservationDailySummaryType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ReservationDailySummaryType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ReservationDailySummaryType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ReservationDailySummaryType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ReservationDailySummaryType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ReservationDailySummaryType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetChildren1

`func (o *ReservationDailySummaryType) GetChildren1() int32`

GetChildren1 returns the Children1 field if non-nil, zero value otherwise.

### GetChildren1Ok

`func (o *ReservationDailySummaryType) GetChildren1Ok() (*int32, bool)`

GetChildren1Ok returns a tuple with the Children1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren1

`func (o *ReservationDailySummaryType) SetChildren1(v int32)`

SetChildren1 sets Children1 field to given value.

### HasChildren1

`func (o *ReservationDailySummaryType) HasChildren1() bool`

HasChildren1 returns a boolean if a field has been set.

### GetChildren2

`func (o *ReservationDailySummaryType) GetChildren2() int32`

GetChildren2 returns the Children2 field if non-nil, zero value otherwise.

### GetChildren2Ok

`func (o *ReservationDailySummaryType) GetChildren2Ok() (*int32, bool)`

GetChildren2Ok returns a tuple with the Children2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren2

`func (o *ReservationDailySummaryType) SetChildren2(v int32)`

SetChildren2 sets Children2 field to given value.

### HasChildren2

`func (o *ReservationDailySummaryType) HasChildren2() bool`

HasChildren2 returns a boolean if a field has been set.

### GetChildren3

`func (o *ReservationDailySummaryType) GetChildren3() int32`

GetChildren3 returns the Children3 field if non-nil, zero value otherwise.

### GetChildren3Ok

`func (o *ReservationDailySummaryType) GetChildren3Ok() (*int32, bool)`

GetChildren3Ok returns a tuple with the Children3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren3

`func (o *ReservationDailySummaryType) SetChildren3(v int32)`

SetChildren3 sets Children3 field to given value.

### HasChildren3

`func (o *ReservationDailySummaryType) HasChildren3() bool`

HasChildren3 returns a boolean if a field has been set.

### GetCancellationReasonCode

`func (o *ReservationDailySummaryType) GetCancellationReasonCode() string`

GetCancellationReasonCode returns the CancellationReasonCode field if non-nil, zero value otherwise.

### GetCancellationReasonCodeOk

`func (o *ReservationDailySummaryType) GetCancellationReasonCodeOk() (*string, bool)`

GetCancellationReasonCodeOk returns a tuple with the CancellationReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReasonCode

`func (o *ReservationDailySummaryType) SetCancellationReasonCode(v string)`

SetCancellationReasonCode sets CancellationReasonCode field to given value.

### HasCancellationReasonCode

`func (o *ReservationDailySummaryType) HasCancellationReasonCode() bool`

HasCancellationReasonCode returns a boolean if a field has been set.

### GetBookingMedium

`func (o *ReservationDailySummaryType) GetBookingMedium() string`

GetBookingMedium returns the BookingMedium field if non-nil, zero value otherwise.

### GetBookingMediumOk

`func (o *ReservationDailySummaryType) GetBookingMediumOk() (*string, bool)`

GetBookingMediumOk returns a tuple with the BookingMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingMedium

`func (o *ReservationDailySummaryType) SetBookingMedium(v string)`

SetBookingMedium sets BookingMedium field to given value.

### HasBookingMedium

`func (o *ReservationDailySummaryType) HasBookingMedium() bool`

HasBookingMedium returns a boolean if a field has been set.

### GetOriginOfBooking

`func (o *ReservationDailySummaryType) GetOriginOfBooking() string`

GetOriginOfBooking returns the OriginOfBooking field if non-nil, zero value otherwise.

### GetOriginOfBookingOk

`func (o *ReservationDailySummaryType) GetOriginOfBookingOk() (*string, bool)`

GetOriginOfBookingOk returns a tuple with the OriginOfBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginOfBooking

`func (o *ReservationDailySummaryType) SetOriginOfBooking(v string)`

SetOriginOfBooking sets OriginOfBooking field to given value.

### HasOriginOfBooking

`func (o *ReservationDailySummaryType) HasOriginOfBooking() bool`

HasOriginOfBooking returns a boolean if a field has been set.

### GetDailySummary

`func (o *ReservationDailySummaryType) GetDailySummary() []DailySummaryType`

GetDailySummary returns the DailySummary field if non-nil, zero value otherwise.

### GetDailySummaryOk

`func (o *ReservationDailySummaryType) GetDailySummaryOk() (*[]DailySummaryType, bool)`

GetDailySummaryOk returns a tuple with the DailySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailySummary

`func (o *ReservationDailySummaryType) SetDailySummary(v []DailySummaryType)`

SetDailySummary sets DailySummary field to given value.

### HasDailySummary

`func (o *ReservationDailySummaryType) HasDailySummary() bool`

HasDailySummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



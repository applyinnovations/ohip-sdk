# EventBookingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Business Block Code. | [optional] 
**BlockName** | Pointer to **string** | Business Block Name. | [optional] 
**RoomStatus** | Pointer to **string** | Room Status of the Block. | [optional] 
**CateringStatus** | Pointer to **string** | Catering Status of the Block. | [optional] 
**CatDecisionDate** | Pointer to **string** | Catering Decision Date of the Block. | [optional] 
**CatFollowUpDate** | Pointer to **string** | Catering Follow Up Date of the Block. | [optional] 
**RoomFollowUpDate** | Pointer to **string** | Room Follow Up Date of the Block. | [optional] 
**Account** | Pointer to **string** | Account attached to the block. | [optional] 
**Contact** | Pointer to **string** | Contact attached to the block. | [optional] 
**RoomNights** | Pointer to **bool** | Boolean to indicate whether rooms are booked for the block. | [optional] 
**OriginalRooms** | Pointer to **float32** | Original number of rooms booked for the block. | [optional] 
**CatOwner** | Pointer to **float32** | Catering Sales Manager ID. | [optional] 
**CatOwnerName** | Pointer to **string** | Catering Sales Manager Name. | [optional] 
**SalesOwner** | Pointer to **float32** | Room Manager ID. | [optional] 
**SalesOwnerName** | Pointer to **string** | Room Manager Name. | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**DeductInvYn** | Pointer to **string** | Flag to indicate Deduct Inventory. | [optional] 
**RateProtect** | Pointer to **bool** | Flag to indicate block is rate protected. | [optional] 
**NonCompete** | Pointer to **bool** | Flag to indicate block is non-compete protected. | [optional] 
**NonCompeteCode** | Pointer to **string** | Holds the industry code if non-compete is enabled. | [optional] 
**NonCompeteIndustry** | Pointer to **string** | Holds the industry description. | [optional] 
**BlockDates** | Pointer to [**[]TimeSpanType**](TimeSpanType.md) | The Time Span(Arrival, Departure) which covers the Block Span. | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**ResvNameId** | Pointer to **float32** | Reservation Name ID. | [optional] 
**BookHotelCode** | Pointer to **string** | Hotel code of the Block. | [optional] 
**BookId** | Pointer to **float32** | Business Block ID. | [optional] 
**MasterNameId** | Pointer to **float32** | Master Name ID. | [optional] 
**CompanyNameId** | Pointer to **float32** | Company Name ID. | [optional] 

## Methods

### NewEventBookingInfoType

`func NewEventBookingInfoType() *EventBookingInfoType`

NewEventBookingInfoType instantiates a new EventBookingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventBookingInfoTypeWithDefaults

`func NewEventBookingInfoTypeWithDefaults() *EventBookingInfoType`

NewEventBookingInfoTypeWithDefaults instantiates a new EventBookingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCode

`func (o *EventBookingInfoType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *EventBookingInfoType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *EventBookingInfoType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *EventBookingInfoType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockName

`func (o *EventBookingInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *EventBookingInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *EventBookingInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *EventBookingInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetRoomStatus

`func (o *EventBookingInfoType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *EventBookingInfoType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *EventBookingInfoType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *EventBookingInfoType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetCateringStatus

`func (o *EventBookingInfoType) GetCateringStatus() string`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *EventBookingInfoType) GetCateringStatusOk() (*string, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *EventBookingInfoType) SetCateringStatus(v string)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *EventBookingInfoType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetCatDecisionDate

`func (o *EventBookingInfoType) GetCatDecisionDate() string`

GetCatDecisionDate returns the CatDecisionDate field if non-nil, zero value otherwise.

### GetCatDecisionDateOk

`func (o *EventBookingInfoType) GetCatDecisionDateOk() (*string, bool)`

GetCatDecisionDateOk returns a tuple with the CatDecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatDecisionDate

`func (o *EventBookingInfoType) SetCatDecisionDate(v string)`

SetCatDecisionDate sets CatDecisionDate field to given value.

### HasCatDecisionDate

`func (o *EventBookingInfoType) HasCatDecisionDate() bool`

HasCatDecisionDate returns a boolean if a field has been set.

### GetCatFollowUpDate

`func (o *EventBookingInfoType) GetCatFollowUpDate() string`

GetCatFollowUpDate returns the CatFollowUpDate field if non-nil, zero value otherwise.

### GetCatFollowUpDateOk

`func (o *EventBookingInfoType) GetCatFollowUpDateOk() (*string, bool)`

GetCatFollowUpDateOk returns a tuple with the CatFollowUpDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatFollowUpDate

`func (o *EventBookingInfoType) SetCatFollowUpDate(v string)`

SetCatFollowUpDate sets CatFollowUpDate field to given value.

### HasCatFollowUpDate

`func (o *EventBookingInfoType) HasCatFollowUpDate() bool`

HasCatFollowUpDate returns a boolean if a field has been set.

### GetRoomFollowUpDate

`func (o *EventBookingInfoType) GetRoomFollowUpDate() string`

GetRoomFollowUpDate returns the RoomFollowUpDate field if non-nil, zero value otherwise.

### GetRoomFollowUpDateOk

`func (o *EventBookingInfoType) GetRoomFollowUpDateOk() (*string, bool)`

GetRoomFollowUpDateOk returns a tuple with the RoomFollowUpDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFollowUpDate

`func (o *EventBookingInfoType) SetRoomFollowUpDate(v string)`

SetRoomFollowUpDate sets RoomFollowUpDate field to given value.

### HasRoomFollowUpDate

`func (o *EventBookingInfoType) HasRoomFollowUpDate() bool`

HasRoomFollowUpDate returns a boolean if a field has been set.

### GetAccount

`func (o *EventBookingInfoType) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *EventBookingInfoType) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *EventBookingInfoType) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *EventBookingInfoType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetContact

`func (o *EventBookingInfoType) GetContact() string`

GetContact returns the Contact field if non-nil, zero value otherwise.

### GetContactOk

`func (o *EventBookingInfoType) GetContactOk() (*string, bool)`

GetContactOk returns a tuple with the Contact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContact

`func (o *EventBookingInfoType) SetContact(v string)`

SetContact sets Contact field to given value.

### HasContact

`func (o *EventBookingInfoType) HasContact() bool`

HasContact returns a boolean if a field has been set.

### GetRoomNights

`func (o *EventBookingInfoType) GetRoomNights() bool`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *EventBookingInfoType) GetRoomNightsOk() (*bool, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *EventBookingInfoType) SetRoomNights(v bool)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *EventBookingInfoType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetOriginalRooms

`func (o *EventBookingInfoType) GetOriginalRooms() float32`

GetOriginalRooms returns the OriginalRooms field if non-nil, zero value otherwise.

### GetOriginalRoomsOk

`func (o *EventBookingInfoType) GetOriginalRoomsOk() (*float32, bool)`

GetOriginalRoomsOk returns a tuple with the OriginalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalRooms

`func (o *EventBookingInfoType) SetOriginalRooms(v float32)`

SetOriginalRooms sets OriginalRooms field to given value.

### HasOriginalRooms

`func (o *EventBookingInfoType) HasOriginalRooms() bool`

HasOriginalRooms returns a boolean if a field has been set.

### GetCatOwner

`func (o *EventBookingInfoType) GetCatOwner() float32`

GetCatOwner returns the CatOwner field if non-nil, zero value otherwise.

### GetCatOwnerOk

`func (o *EventBookingInfoType) GetCatOwnerOk() (*float32, bool)`

GetCatOwnerOk returns a tuple with the CatOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatOwner

`func (o *EventBookingInfoType) SetCatOwner(v float32)`

SetCatOwner sets CatOwner field to given value.

### HasCatOwner

`func (o *EventBookingInfoType) HasCatOwner() bool`

HasCatOwner returns a boolean if a field has been set.

### GetCatOwnerName

`func (o *EventBookingInfoType) GetCatOwnerName() string`

GetCatOwnerName returns the CatOwnerName field if non-nil, zero value otherwise.

### GetCatOwnerNameOk

`func (o *EventBookingInfoType) GetCatOwnerNameOk() (*string, bool)`

GetCatOwnerNameOk returns a tuple with the CatOwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatOwnerName

`func (o *EventBookingInfoType) SetCatOwnerName(v string)`

SetCatOwnerName sets CatOwnerName field to given value.

### HasCatOwnerName

`func (o *EventBookingInfoType) HasCatOwnerName() bool`

HasCatOwnerName returns a boolean if a field has been set.

### GetSalesOwner

`func (o *EventBookingInfoType) GetSalesOwner() float32`

GetSalesOwner returns the SalesOwner field if non-nil, zero value otherwise.

### GetSalesOwnerOk

`func (o *EventBookingInfoType) GetSalesOwnerOk() (*float32, bool)`

GetSalesOwnerOk returns a tuple with the SalesOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesOwner

`func (o *EventBookingInfoType) SetSalesOwner(v float32)`

SetSalesOwner sets SalesOwner field to given value.

### HasSalesOwner

`func (o *EventBookingInfoType) HasSalesOwner() bool`

HasSalesOwner returns a boolean if a field has been set.

### GetSalesOwnerName

`func (o *EventBookingInfoType) GetSalesOwnerName() string`

GetSalesOwnerName returns the SalesOwnerName field if non-nil, zero value otherwise.

### GetSalesOwnerNameOk

`func (o *EventBookingInfoType) GetSalesOwnerNameOk() (*string, bool)`

GetSalesOwnerNameOk returns a tuple with the SalesOwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesOwnerName

`func (o *EventBookingInfoType) SetSalesOwnerName(v string)`

SetSalesOwnerName sets SalesOwnerName field to given value.

### HasSalesOwnerName

`func (o *EventBookingInfoType) HasSalesOwnerName() bool`

HasSalesOwnerName returns a boolean if a field has been set.

### GetEventStatus

`func (o *EventBookingInfoType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *EventBookingInfoType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *EventBookingInfoType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *EventBookingInfoType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetDeductInvYn

`func (o *EventBookingInfoType) GetDeductInvYn() string`

GetDeductInvYn returns the DeductInvYn field if non-nil, zero value otherwise.

### GetDeductInvYnOk

`func (o *EventBookingInfoType) GetDeductInvYnOk() (*string, bool)`

GetDeductInvYnOk returns a tuple with the DeductInvYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductInvYn

`func (o *EventBookingInfoType) SetDeductInvYn(v string)`

SetDeductInvYn sets DeductInvYn field to given value.

### HasDeductInvYn

`func (o *EventBookingInfoType) HasDeductInvYn() bool`

HasDeductInvYn returns a boolean if a field has been set.

### GetRateProtect

`func (o *EventBookingInfoType) GetRateProtect() bool`

GetRateProtect returns the RateProtect field if non-nil, zero value otherwise.

### GetRateProtectOk

`func (o *EventBookingInfoType) GetRateProtectOk() (*bool, bool)`

GetRateProtectOk returns a tuple with the RateProtect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateProtect

`func (o *EventBookingInfoType) SetRateProtect(v bool)`

SetRateProtect sets RateProtect field to given value.

### HasRateProtect

`func (o *EventBookingInfoType) HasRateProtect() bool`

HasRateProtect returns a boolean if a field has been set.

### GetNonCompete

`func (o *EventBookingInfoType) GetNonCompete() bool`

GetNonCompete returns the NonCompete field if non-nil, zero value otherwise.

### GetNonCompeteOk

`func (o *EventBookingInfoType) GetNonCompeteOk() (*bool, bool)`

GetNonCompeteOk returns a tuple with the NonCompete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompete

`func (o *EventBookingInfoType) SetNonCompete(v bool)`

SetNonCompete sets NonCompete field to given value.

### HasNonCompete

`func (o *EventBookingInfoType) HasNonCompete() bool`

HasNonCompete returns a boolean if a field has been set.

### GetNonCompeteCode

`func (o *EventBookingInfoType) GetNonCompeteCode() string`

GetNonCompeteCode returns the NonCompeteCode field if non-nil, zero value otherwise.

### GetNonCompeteCodeOk

`func (o *EventBookingInfoType) GetNonCompeteCodeOk() (*string, bool)`

GetNonCompeteCodeOk returns a tuple with the NonCompeteCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompeteCode

`func (o *EventBookingInfoType) SetNonCompeteCode(v string)`

SetNonCompeteCode sets NonCompeteCode field to given value.

### HasNonCompeteCode

`func (o *EventBookingInfoType) HasNonCompeteCode() bool`

HasNonCompeteCode returns a boolean if a field has been set.

### GetNonCompeteIndustry

`func (o *EventBookingInfoType) GetNonCompeteIndustry() string`

GetNonCompeteIndustry returns the NonCompeteIndustry field if non-nil, zero value otherwise.

### GetNonCompeteIndustryOk

`func (o *EventBookingInfoType) GetNonCompeteIndustryOk() (*string, bool)`

GetNonCompeteIndustryOk returns a tuple with the NonCompeteIndustry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompeteIndustry

`func (o *EventBookingInfoType) SetNonCompeteIndustry(v string)`

SetNonCompeteIndustry sets NonCompeteIndustry field to given value.

### HasNonCompeteIndustry

`func (o *EventBookingInfoType) HasNonCompeteIndustry() bool`

HasNonCompeteIndustry returns a boolean if a field has been set.

### GetBlockDates

`func (o *EventBookingInfoType) GetBlockDates() []TimeSpanType`

GetBlockDates returns the BlockDates field if non-nil, zero value otherwise.

### GetBlockDatesOk

`func (o *EventBookingInfoType) GetBlockDatesOk() (*[]TimeSpanType, bool)`

GetBlockDatesOk returns a tuple with the BlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDates

`func (o *EventBookingInfoType) SetBlockDates(v []TimeSpanType)`

SetBlockDates sets BlockDates field to given value.

### HasBlockDates

`func (o *EventBookingInfoType) HasBlockDates() bool`

HasBlockDates returns a boolean if a field has been set.

### GetVipStatus

`func (o *EventBookingInfoType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *EventBookingInfoType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *EventBookingInfoType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *EventBookingInfoType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetGuarantee

`func (o *EventBookingInfoType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *EventBookingInfoType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *EventBookingInfoType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *EventBookingInfoType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetResvNameId

`func (o *EventBookingInfoType) GetResvNameId() float32`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *EventBookingInfoType) GetResvNameIdOk() (*float32, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *EventBookingInfoType) SetResvNameId(v float32)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *EventBookingInfoType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetBookHotelCode

`func (o *EventBookingInfoType) GetBookHotelCode() string`

GetBookHotelCode returns the BookHotelCode field if non-nil, zero value otherwise.

### GetBookHotelCodeOk

`func (o *EventBookingInfoType) GetBookHotelCodeOk() (*string, bool)`

GetBookHotelCodeOk returns a tuple with the BookHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookHotelCode

`func (o *EventBookingInfoType) SetBookHotelCode(v string)`

SetBookHotelCode sets BookHotelCode field to given value.

### HasBookHotelCode

`func (o *EventBookingInfoType) HasBookHotelCode() bool`

HasBookHotelCode returns a boolean if a field has been set.

### GetBookId

`func (o *EventBookingInfoType) GetBookId() float32`

GetBookId returns the BookId field if non-nil, zero value otherwise.

### GetBookIdOk

`func (o *EventBookingInfoType) GetBookIdOk() (*float32, bool)`

GetBookIdOk returns a tuple with the BookId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookId

`func (o *EventBookingInfoType) SetBookId(v float32)`

SetBookId sets BookId field to given value.

### HasBookId

`func (o *EventBookingInfoType) HasBookId() bool`

HasBookId returns a boolean if a field has been set.

### GetMasterNameId

`func (o *EventBookingInfoType) GetMasterNameId() float32`

GetMasterNameId returns the MasterNameId field if non-nil, zero value otherwise.

### GetMasterNameIdOk

`func (o *EventBookingInfoType) GetMasterNameIdOk() (*float32, bool)`

GetMasterNameIdOk returns a tuple with the MasterNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterNameId

`func (o *EventBookingInfoType) SetMasterNameId(v float32)`

SetMasterNameId sets MasterNameId field to given value.

### HasMasterNameId

`func (o *EventBookingInfoType) HasMasterNameId() bool`

HasMasterNameId returns a boolean if a field has been set.

### GetCompanyNameId

`func (o *EventBookingInfoType) GetCompanyNameId() float32`

GetCompanyNameId returns the CompanyNameId field if non-nil, zero value otherwise.

### GetCompanyNameIdOk

`func (o *EventBookingInfoType) GetCompanyNameIdOk() (*float32, bool)`

GetCompanyNameIdOk returns a tuple with the CompanyNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyNameId

`func (o *EventBookingInfoType) SetCompanyNameId(v float32)`

SetCompanyNameId sets CompanyNameId field to given value.

### HasCompanyNameId

`func (o *EventBookingInfoType) HasCompanyNameId() bool`

HasCompanyNameId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



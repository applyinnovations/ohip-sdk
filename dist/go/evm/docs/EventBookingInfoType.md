# EventBookingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockDates** | Pointer to [**[]TimeSpanType**](TimeSpanType.md) | The Time Span(Arrival, Departure) which covers the Block Span. | [optional] 
**BookHotelCode** | Pointer to **string** | Hotel code of the Block. | [optional] 
**BookId** | Pointer to **float32** | Business Block ID. | [optional] 
**CatOwner** | Pointer to **float32** | Catering Sales Manager ID. | [optional] 
**CatOwnerName** | Pointer to **string** | Catering Sales Manager Name. | [optional] 
**CompanyNameId** | Pointer to **float32** | Company Name ID. | [optional] 
**DeductInvYn** | Pointer to **string** | Flag to indicate Deduct Inventory. | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**MasterNameId** | Pointer to **float32** | Master Name ID. | [optional] 
**NonCompete** | Pointer to **bool** | Flag to indicate block is non-compete protected. | [optional] 
**NonCompeteCode** | Pointer to **string** | Holds the industry code if non-compete is enabled. | [optional] 
**NonCompeteIndustry** | Pointer to **string** | Holds the industry description. | [optional] 
**RateProtect** | Pointer to **bool** | Flag to indicate block is rate protected. | [optional] 
**ResvNameId** | Pointer to **float32** | Reservation Name ID. | [optional] 
**SalesOwner** | Pointer to **float32** | Room Manager ID. | [optional] 
**SalesOwnerName** | Pointer to **string** | Room Manager Name. | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



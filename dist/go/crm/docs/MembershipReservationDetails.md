# MembershipReservationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarDate** | Pointer to **string** | Date for the requested membership reservation details. | [optional] 
**MembershipReservationDetailsList** | Pointer to [**[]MembershipReservationDetailUnitType**](MembershipReservationDetailUnitType.md) | List of fetched membership reservation details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipReservationDetails

`func NewMembershipReservationDetails() *MembershipReservationDetails`

NewMembershipReservationDetails instantiates a new MembershipReservationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipReservationDetailsWithDefaults

`func NewMembershipReservationDetailsWithDefaults() *MembershipReservationDetails`

NewMembershipReservationDetailsWithDefaults instantiates a new MembershipReservationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarDate

`func (o *MembershipReservationDetails) GetCalendarDate() string`

GetCalendarDate returns the CalendarDate field if non-nil, zero value otherwise.

### GetCalendarDateOk

`func (o *MembershipReservationDetails) GetCalendarDateOk() (*string, bool)`

GetCalendarDateOk returns a tuple with the CalendarDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarDate

`func (o *MembershipReservationDetails) SetCalendarDate(v string)`

SetCalendarDate sets CalendarDate field to given value.

### HasCalendarDate

`func (o *MembershipReservationDetails) HasCalendarDate() bool`

HasCalendarDate returns a boolean if a field has been set.

### GetMembershipReservationDetailsList

`func (o *MembershipReservationDetails) GetMembershipReservationDetailsList() []MembershipReservationDetailUnitType`

GetMembershipReservationDetailsList returns the MembershipReservationDetailsList field if non-nil, zero value otherwise.

### GetMembershipReservationDetailsListOk

`func (o *MembershipReservationDetails) GetMembershipReservationDetailsListOk() (*[]MembershipReservationDetailUnitType, bool)`

GetMembershipReservationDetailsListOk returns a tuple with the MembershipReservationDetailsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipReservationDetailsList

`func (o *MembershipReservationDetails) SetMembershipReservationDetailsList(v []MembershipReservationDetailUnitType)`

SetMembershipReservationDetailsList sets MembershipReservationDetailsList field to given value.

### HasMembershipReservationDetailsList

`func (o *MembershipReservationDetails) HasMembershipReservationDetailsList() bool`

HasMembershipReservationDetailsList returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipReservationDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipReservationDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipReservationDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipReservationDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipReservationDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipReservationDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipReservationDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipReservationDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



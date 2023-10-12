# PostGuestCheckDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**CheckDetails** | Pointer to [**CheckDetailsType**](CheckDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostGuestCheckDetailsRequest

`func NewPostGuestCheckDetailsRequest() *PostGuestCheckDetailsRequest`

NewPostGuestCheckDetailsRequest instantiates a new PostGuestCheckDetailsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGuestCheckDetailsRequestWithDefaults

`func NewPostGuestCheckDetailsRequestWithDefaults() *PostGuestCheckDetailsRequest`

NewPostGuestCheckDetailsRequestWithDefaults instantiates a new PostGuestCheckDetailsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *PostGuestCheckDetailsRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostGuestCheckDetailsRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostGuestCheckDetailsRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostGuestCheckDetailsRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetCheckDetails

`func (o *PostGuestCheckDetailsRequest) GetCheckDetails() CheckDetailsType`

GetCheckDetails returns the CheckDetails field if non-nil, zero value otherwise.

### GetCheckDetailsOk

`func (o *PostGuestCheckDetailsRequest) GetCheckDetailsOk() (*CheckDetailsType, bool)`

GetCheckDetailsOk returns a tuple with the CheckDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckDetails

`func (o *PostGuestCheckDetailsRequest) SetCheckDetails(v CheckDetailsType)`

SetCheckDetails sets CheckDetails field to given value.

### HasCheckDetails

`func (o *PostGuestCheckDetailsRequest) HasCheckDetails() bool`

HasCheckDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostGuestCheckDetailsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGuestCheckDetailsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGuestCheckDetailsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGuestCheckDetailsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGuestCheckDetailsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGuestCheckDetailsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGuestCheckDetailsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGuestCheckDetailsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ReservationAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationAttachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationAttachments

`func NewReservationAttachments() *ReservationAttachments`

NewReservationAttachments instantiates a new ReservationAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAttachmentsWithDefaults

`func NewReservationAttachmentsWithDefaults() *ReservationAttachments`

NewReservationAttachmentsWithDefaults instantiates a new ReservationAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationAttachments

`func (o *ReservationAttachments) GetReservationAttachments() []AttachmentType`

GetReservationAttachments returns the ReservationAttachments field if non-nil, zero value otherwise.

### GetReservationAttachmentsOk

`func (o *ReservationAttachments) GetReservationAttachmentsOk() (*[]AttachmentType, bool)`

GetReservationAttachmentsOk returns a tuple with the ReservationAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationAttachments

`func (o *ReservationAttachments) SetReservationAttachments(v []AttachmentType)`

SetReservationAttachments sets ReservationAttachments field to given value.

### HasReservationAttachments

`func (o *ReservationAttachments) HasReservationAttachments() bool`

HasReservationAttachments returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



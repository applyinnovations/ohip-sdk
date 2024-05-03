# CalendarTaskAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarTaskAttachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCalendarTaskAttachments

`func NewCalendarTaskAttachments() *CalendarTaskAttachments`

NewCalendarTaskAttachments instantiates a new CalendarTaskAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarTaskAttachmentsWithDefaults

`func NewCalendarTaskAttachmentsWithDefaults() *CalendarTaskAttachments`

NewCalendarTaskAttachmentsWithDefaults instantiates a new CalendarTaskAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarTaskAttachments

`func (o *CalendarTaskAttachments) GetCalendarTaskAttachments() []AttachmentType`

GetCalendarTaskAttachments returns the CalendarTaskAttachments field if non-nil, zero value otherwise.

### GetCalendarTaskAttachmentsOk

`func (o *CalendarTaskAttachments) GetCalendarTaskAttachmentsOk() (*[]AttachmentType, bool)`

GetCalendarTaskAttachmentsOk returns a tuple with the CalendarTaskAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarTaskAttachments

`func (o *CalendarTaskAttachments) SetCalendarTaskAttachments(v []AttachmentType)`

SetCalendarTaskAttachments sets CalendarTaskAttachments field to given value.

### HasCalendarTaskAttachments

`func (o *CalendarTaskAttachments) HasCalendarTaskAttachments() bool`

HasCalendarTaskAttachments returns a boolean if a field has been set.

### GetLinks

`func (o *CalendarTaskAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalendarTaskAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalendarTaskAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalendarTaskAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CalendarTaskAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalendarTaskAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalendarTaskAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalendarTaskAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



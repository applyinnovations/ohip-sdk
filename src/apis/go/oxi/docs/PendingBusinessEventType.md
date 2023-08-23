# PendingBusinessEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Module** | Pointer to **string** | Module name where the change occurred | [optional] 
**ExternalSystem** | Pointer to **string** | Name of the external system that the message was created for | [optional] 
**ActionType** | Pointer to **string** | Type of action that the outbound message is pertaining to | [optional] 
**ActionId** | Pointer to **string** | Action Id number that is automatically assigned to the action when it happened | [optional] 
**EnquiryDate** | Pointer to **time.Time** | Date when the business event change occurred | [optional] 
**HotelId** | Pointer to **string** | Hotel Code associated with business event | [optional] 
**CreatedDate** | Pointer to **time.Time** | Date and time that the change happened | [optional] 
**PrimaryKey** | Pointer to **string** | Alpha-numeric key to uniquely identify the data applicable to that particular action | [optional] 
**Consumer** | Pointer to **string** | Name of the external system that the message was created for and needs to picked up by. | [optional] 

## Methods

### NewPendingBusinessEventType

`func NewPendingBusinessEventType() *PendingBusinessEventType`

NewPendingBusinessEventType instantiates a new PendingBusinessEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingBusinessEventTypeWithDefaults

`func NewPendingBusinessEventTypeWithDefaults() *PendingBusinessEventType`

NewPendingBusinessEventTypeWithDefaults instantiates a new PendingBusinessEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModule

`func (o *PendingBusinessEventType) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *PendingBusinessEventType) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *PendingBusinessEventType) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *PendingBusinessEventType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetExternalSystem

`func (o *PendingBusinessEventType) GetExternalSystem() string`

GetExternalSystem returns the ExternalSystem field if non-nil, zero value otherwise.

### GetExternalSystemOk

`func (o *PendingBusinessEventType) GetExternalSystemOk() (*string, bool)`

GetExternalSystemOk returns a tuple with the ExternalSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystem

`func (o *PendingBusinessEventType) SetExternalSystem(v string)`

SetExternalSystem sets ExternalSystem field to given value.

### HasExternalSystem

`func (o *PendingBusinessEventType) HasExternalSystem() bool`

HasExternalSystem returns a boolean if a field has been set.

### GetActionType

`func (o *PendingBusinessEventType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *PendingBusinessEventType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *PendingBusinessEventType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *PendingBusinessEventType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActionId

`func (o *PendingBusinessEventType) GetActionId() string`

GetActionId returns the ActionId field if non-nil, zero value otherwise.

### GetActionIdOk

`func (o *PendingBusinessEventType) GetActionIdOk() (*string, bool)`

GetActionIdOk returns a tuple with the ActionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionId

`func (o *PendingBusinessEventType) SetActionId(v string)`

SetActionId sets ActionId field to given value.

### HasActionId

`func (o *PendingBusinessEventType) HasActionId() bool`

HasActionId returns a boolean if a field has been set.

### GetEnquiryDate

`func (o *PendingBusinessEventType) GetEnquiryDate() time.Time`

GetEnquiryDate returns the EnquiryDate field if non-nil, zero value otherwise.

### GetEnquiryDateOk

`func (o *PendingBusinessEventType) GetEnquiryDateOk() (*time.Time, bool)`

GetEnquiryDateOk returns a tuple with the EnquiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnquiryDate

`func (o *PendingBusinessEventType) SetEnquiryDate(v time.Time)`

SetEnquiryDate sets EnquiryDate field to given value.

### HasEnquiryDate

`func (o *PendingBusinessEventType) HasEnquiryDate() bool`

HasEnquiryDate returns a boolean if a field has been set.

### GetHotelId

`func (o *PendingBusinessEventType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PendingBusinessEventType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PendingBusinessEventType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PendingBusinessEventType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *PendingBusinessEventType) GetCreatedDate() time.Time`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *PendingBusinessEventType) GetCreatedDateOk() (*time.Time, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *PendingBusinessEventType) SetCreatedDate(v time.Time)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *PendingBusinessEventType) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetPrimaryKey

`func (o *PendingBusinessEventType) GetPrimaryKey() string`

GetPrimaryKey returns the PrimaryKey field if non-nil, zero value otherwise.

### GetPrimaryKeyOk

`func (o *PendingBusinessEventType) GetPrimaryKeyOk() (*string, bool)`

GetPrimaryKeyOk returns a tuple with the PrimaryKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryKey

`func (o *PendingBusinessEventType) SetPrimaryKey(v string)`

SetPrimaryKey sets PrimaryKey field to given value.

### HasPrimaryKey

`func (o *PendingBusinessEventType) HasPrimaryKey() bool`

HasPrimaryKey returns a boolean if a field has been set.

### GetConsumer

`func (o *PendingBusinessEventType) GetConsumer() string`

GetConsumer returns the Consumer field if non-nil, zero value otherwise.

### GetConsumerOk

`func (o *PendingBusinessEventType) GetConsumerOk() (*string, bool)`

GetConsumerOk returns a tuple with the Consumer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumer

`func (o *PendingBusinessEventType) SetConsumer(v string)`

SetConsumer sets Consumer field to given value.

### HasConsumer

`func (o *PendingBusinessEventType) HasConsumer() bool`

HasConsumer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



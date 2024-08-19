# CateringEventsProcessedInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**EventDate** | Pointer to **string** | Date of the event | [optional] 
**EventName** | Pointer to **string** | Name of event. | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**FunctionSpaceDetails** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code where event will be copied. | [optional] 
**ProcessingInfoCode** | Pointer to **string** | Erorr/Warning code for not processing th event. | [optional] 
**ProcessingInfoType** | Pointer to **string** | Flag to indicate the warning messages from the API | [optional] 
**Reason** | Pointer to **string** | Reason for not processing the event. | [optional] 
**Status** | Pointer to **string** | Status of the processed event. e.g Completed, Not Processed. | [optional] 

## Methods

### NewCateringEventsProcessedInfoType

`func NewCateringEventsProcessedInfoType() *CateringEventsProcessedInfoType`

NewCateringEventsProcessedInfoType instantiates a new CateringEventsProcessedInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventsProcessedInfoTypeWithDefaults

`func NewCateringEventsProcessedInfoTypeWithDefaults() *CateringEventsProcessedInfoType`

NewCateringEventsProcessedInfoTypeWithDefaults instantiates a new CateringEventsProcessedInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *CateringEventsProcessedInfoType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CateringEventsProcessedInfoType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CateringEventsProcessedInfoType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CateringEventsProcessedInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventDate

`func (o *CateringEventsProcessedInfoType) GetEventDate() string`

GetEventDate returns the EventDate field if non-nil, zero value otherwise.

### GetEventDateOk

`func (o *CateringEventsProcessedInfoType) GetEventDateOk() (*string, bool)`

GetEventDateOk returns a tuple with the EventDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDate

`func (o *CateringEventsProcessedInfoType) SetEventDate(v string)`

SetEventDate sets EventDate field to given value.

### HasEventDate

`func (o *CateringEventsProcessedInfoType) HasEventDate() bool`

HasEventDate returns a boolean if a field has been set.

### GetEventName

`func (o *CateringEventsProcessedInfoType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CateringEventsProcessedInfoType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CateringEventsProcessedInfoType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CateringEventsProcessedInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventType

`func (o *CateringEventsProcessedInfoType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CateringEventsProcessedInfoType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CateringEventsProcessedInfoType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CateringEventsProcessedInfoType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetFunctionSpaceDetails

`func (o *CateringEventsProcessedInfoType) GetFunctionSpaceDetails() CodeDescriptionType`

GetFunctionSpaceDetails returns the FunctionSpaceDetails field if non-nil, zero value otherwise.

### GetFunctionSpaceDetailsOk

`func (o *CateringEventsProcessedInfoType) GetFunctionSpaceDetailsOk() (*CodeDescriptionType, bool)`

GetFunctionSpaceDetailsOk returns a tuple with the FunctionSpaceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceDetails

`func (o *CateringEventsProcessedInfoType) SetFunctionSpaceDetails(v CodeDescriptionType)`

SetFunctionSpaceDetails sets FunctionSpaceDetails field to given value.

### HasFunctionSpaceDetails

`func (o *CateringEventsProcessedInfoType) HasFunctionSpaceDetails() bool`

HasFunctionSpaceDetails returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringEventsProcessedInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringEventsProcessedInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringEventsProcessedInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringEventsProcessedInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProcessingInfoCode

`func (o *CateringEventsProcessedInfoType) GetProcessingInfoCode() string`

GetProcessingInfoCode returns the ProcessingInfoCode field if non-nil, zero value otherwise.

### GetProcessingInfoCodeOk

`func (o *CateringEventsProcessedInfoType) GetProcessingInfoCodeOk() (*string, bool)`

GetProcessingInfoCodeOk returns a tuple with the ProcessingInfoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInfoCode

`func (o *CateringEventsProcessedInfoType) SetProcessingInfoCode(v string)`

SetProcessingInfoCode sets ProcessingInfoCode field to given value.

### HasProcessingInfoCode

`func (o *CateringEventsProcessedInfoType) HasProcessingInfoCode() bool`

HasProcessingInfoCode returns a boolean if a field has been set.

### GetProcessingInfoType

`func (o *CateringEventsProcessedInfoType) GetProcessingInfoType() string`

GetProcessingInfoType returns the ProcessingInfoType field if non-nil, zero value otherwise.

### GetProcessingInfoTypeOk

`func (o *CateringEventsProcessedInfoType) GetProcessingInfoTypeOk() (*string, bool)`

GetProcessingInfoTypeOk returns a tuple with the ProcessingInfoType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInfoType

`func (o *CateringEventsProcessedInfoType) SetProcessingInfoType(v string)`

SetProcessingInfoType sets ProcessingInfoType field to given value.

### HasProcessingInfoType

`func (o *CateringEventsProcessedInfoType) HasProcessingInfoType() bool`

HasProcessingInfoType returns a boolean if a field has been set.

### GetReason

`func (o *CateringEventsProcessedInfoType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CateringEventsProcessedInfoType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CateringEventsProcessedInfoType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CateringEventsProcessedInfoType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetStatus

`func (o *CateringEventsProcessedInfoType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CateringEventsProcessedInfoType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CateringEventsProcessedInfoType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CateringEventsProcessedInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



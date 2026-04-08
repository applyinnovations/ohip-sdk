# ChangeCateringStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Opera Hotel code for the change block status operation. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**CurrentCateringStatus** | Pointer to **string** | Current catering status of the business block. | [optional] 
**NewCateringStatus** | Pointer to **string** | New catering status of the business block. | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**MasterSubBlockInfo** | Pointer to [**MasterBlockInfoType**](MasterBlockInfoType.md) |  | [optional] 
**EventAttendees** | Pointer to [**EventAttendeesType**](EventAttendeesType.md) |  | [optional] 
**OverrideEventsProcessingWarnings** | Pointer to **bool** | Indicates whether to ignore any warning during applying the changes to the events associated with the current block. | [optional] 

## Methods

### NewChangeCateringStatusType

`func NewChangeCateringStatusType() *ChangeCateringStatusType`

NewChangeCateringStatusType instantiates a new ChangeCateringStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCateringStatusTypeWithDefaults

`func NewChangeCateringStatusTypeWithDefaults() *ChangeCateringStatusType`

NewChangeCateringStatusTypeWithDefaults instantiates a new ChangeCateringStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ChangeCateringStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeCateringStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeCateringStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeCateringStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *ChangeCateringStatusType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ChangeCateringStatusType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ChangeCateringStatusType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ChangeCateringStatusType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetCurrentCateringStatus

`func (o *ChangeCateringStatusType) GetCurrentCateringStatus() string`

GetCurrentCateringStatus returns the CurrentCateringStatus field if non-nil, zero value otherwise.

### GetCurrentCateringStatusOk

`func (o *ChangeCateringStatusType) GetCurrentCateringStatusOk() (*string, bool)`

GetCurrentCateringStatusOk returns a tuple with the CurrentCateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentCateringStatus

`func (o *ChangeCateringStatusType) SetCurrentCateringStatus(v string)`

SetCurrentCateringStatus sets CurrentCateringStatus field to given value.

### HasCurrentCateringStatus

`func (o *ChangeCateringStatusType) HasCurrentCateringStatus() bool`

HasCurrentCateringStatus returns a boolean if a field has been set.

### GetNewCateringStatus

`func (o *ChangeCateringStatusType) GetNewCateringStatus() string`

GetNewCateringStatus returns the NewCateringStatus field if non-nil, zero value otherwise.

### GetNewCateringStatusOk

`func (o *ChangeCateringStatusType) GetNewCateringStatusOk() (*string, bool)`

GetNewCateringStatusOk returns a tuple with the NewCateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewCateringStatus

`func (o *ChangeCateringStatusType) SetNewCateringStatus(v string)`

SetNewCateringStatus sets NewCateringStatus field to given value.

### HasNewCateringStatus

`func (o *ChangeCateringStatusType) HasNewCateringStatus() bool`

HasNewCateringStatus returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *ChangeCateringStatusType) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *ChangeCateringStatusType) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *ChangeCateringStatusType) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *ChangeCateringStatusType) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetMasterSubBlockInfo

`func (o *ChangeCateringStatusType) GetMasterSubBlockInfo() MasterBlockInfoType`

GetMasterSubBlockInfo returns the MasterSubBlockInfo field if non-nil, zero value otherwise.

### GetMasterSubBlockInfoOk

`func (o *ChangeCateringStatusType) GetMasterSubBlockInfoOk() (*MasterBlockInfoType, bool)`

GetMasterSubBlockInfoOk returns a tuple with the MasterSubBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterSubBlockInfo

`func (o *ChangeCateringStatusType) SetMasterSubBlockInfo(v MasterBlockInfoType)`

SetMasterSubBlockInfo sets MasterSubBlockInfo field to given value.

### HasMasterSubBlockInfo

`func (o *ChangeCateringStatusType) HasMasterSubBlockInfo() bool`

HasMasterSubBlockInfo returns a boolean if a field has been set.

### GetEventAttendees

`func (o *ChangeCateringStatusType) GetEventAttendees() EventAttendeesType`

GetEventAttendees returns the EventAttendees field if non-nil, zero value otherwise.

### GetEventAttendeesOk

`func (o *ChangeCateringStatusType) GetEventAttendeesOk() (*EventAttendeesType, bool)`

GetEventAttendeesOk returns a tuple with the EventAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventAttendees

`func (o *ChangeCateringStatusType) SetEventAttendees(v EventAttendeesType)`

SetEventAttendees sets EventAttendees field to given value.

### HasEventAttendees

`func (o *ChangeCateringStatusType) HasEventAttendees() bool`

HasEventAttendees returns a boolean if a field has been set.

### GetOverrideEventsProcessingWarnings

`func (o *ChangeCateringStatusType) GetOverrideEventsProcessingWarnings() bool`

GetOverrideEventsProcessingWarnings returns the OverrideEventsProcessingWarnings field if non-nil, zero value otherwise.

### GetOverrideEventsProcessingWarningsOk

`func (o *ChangeCateringStatusType) GetOverrideEventsProcessingWarningsOk() (*bool, bool)`

GetOverrideEventsProcessingWarningsOk returns a tuple with the OverrideEventsProcessingWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideEventsProcessingWarnings

`func (o *ChangeCateringStatusType) SetOverrideEventsProcessingWarnings(v bool)`

SetOverrideEventsProcessingWarnings sets OverrideEventsProcessingWarnings field to given value.

### HasOverrideEventsProcessingWarnings

`func (o *ChangeCateringStatusType) HasOverrideEventsProcessingWarnings() bool`

HasOverrideEventsProcessingWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



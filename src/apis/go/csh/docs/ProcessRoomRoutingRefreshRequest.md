# ProcessRoomRoutingRefreshRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomRoutingRefreshCriteria** | Pointer to [**RoomRoutingRefreshCriteriaType**](RoomRoutingRefreshCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProcessRoomRoutingRefreshRequest

`func NewProcessRoomRoutingRefreshRequest() *ProcessRoomRoutingRefreshRequest`

NewProcessRoomRoutingRefreshRequest instantiates a new ProcessRoomRoutingRefreshRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessRoomRoutingRefreshRequestWithDefaults

`func NewProcessRoomRoutingRefreshRequestWithDefaults() *ProcessRoomRoutingRefreshRequest`

NewProcessRoomRoutingRefreshRequestWithDefaults instantiates a new ProcessRoomRoutingRefreshRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomRoutingRefreshCriteria

`func (o *ProcessRoomRoutingRefreshRequest) GetRoomRoutingRefreshCriteria() RoomRoutingRefreshCriteriaType`

GetRoomRoutingRefreshCriteria returns the RoomRoutingRefreshCriteria field if non-nil, zero value otherwise.

### GetRoomRoutingRefreshCriteriaOk

`func (o *ProcessRoomRoutingRefreshRequest) GetRoomRoutingRefreshCriteriaOk() (*RoomRoutingRefreshCriteriaType, bool)`

GetRoomRoutingRefreshCriteriaOk returns a tuple with the RoomRoutingRefreshCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRoutingRefreshCriteria

`func (o *ProcessRoomRoutingRefreshRequest) SetRoomRoutingRefreshCriteria(v RoomRoutingRefreshCriteriaType)`

SetRoomRoutingRefreshCriteria sets RoomRoutingRefreshCriteria field to given value.

### HasRoomRoutingRefreshCriteria

`func (o *ProcessRoomRoutingRefreshRequest) HasRoomRoutingRefreshCriteria() bool`

HasRoomRoutingRefreshCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ProcessRoomRoutingRefreshRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProcessRoomRoutingRefreshRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProcessRoomRoutingRefreshRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProcessRoomRoutingRefreshRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProcessRoomRoutingRefreshRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProcessRoomRoutingRefreshRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProcessRoomRoutingRefreshRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProcessRoomRoutingRefreshRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



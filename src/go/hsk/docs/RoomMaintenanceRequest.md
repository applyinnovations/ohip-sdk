# RoomMaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoomMaintenanceRequestType**](RoomMaintenanceRequestType.md) |  | [optional] 
**IncludeDetails** | Pointer to **bool** | Attribute to decide whether response should include additional details. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomMaintenanceRequest

`func NewRoomMaintenanceRequest() *RoomMaintenanceRequest`

NewRoomMaintenanceRequest instantiates a new RoomMaintenanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMaintenanceRequestWithDefaults

`func NewRoomMaintenanceRequestWithDefaults() *RoomMaintenanceRequest`

NewRoomMaintenanceRequestWithDefaults instantiates a new RoomMaintenanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *RoomMaintenanceRequest) GetCriteria() RoomMaintenanceRequestType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RoomMaintenanceRequest) GetCriteriaOk() (*RoomMaintenanceRequestType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RoomMaintenanceRequest) SetCriteria(v RoomMaintenanceRequestType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *RoomMaintenanceRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetIncludeDetails

`func (o *RoomMaintenanceRequest) GetIncludeDetails() bool`

GetIncludeDetails returns the IncludeDetails field if non-nil, zero value otherwise.

### GetIncludeDetailsOk

`func (o *RoomMaintenanceRequest) GetIncludeDetailsOk() (*bool, bool)`

GetIncludeDetailsOk returns a tuple with the IncludeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDetails

`func (o *RoomMaintenanceRequest) SetIncludeDetails(v bool)`

SetIncludeDetails sets IncludeDetails field to given value.

### HasIncludeDetails

`func (o *RoomMaintenanceRequest) HasIncludeDetails() bool`

HasIncludeDetails returns a boolean if a field has been set.

### GetLinks

`func (o *RoomMaintenanceRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomMaintenanceRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomMaintenanceRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomMaintenanceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomMaintenanceRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomMaintenanceRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomMaintenanceRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomMaintenanceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



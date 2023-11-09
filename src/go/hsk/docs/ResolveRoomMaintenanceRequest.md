# ResolveRoomMaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoomMaintenanceChangeType**](RoomMaintenanceChangeType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewResolveRoomMaintenanceRequest

`func NewResolveRoomMaintenanceRequest() *ResolveRoomMaintenanceRequest`

NewResolveRoomMaintenanceRequest instantiates a new ResolveRoomMaintenanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResolveRoomMaintenanceRequestWithDefaults

`func NewResolveRoomMaintenanceRequestWithDefaults() *ResolveRoomMaintenanceRequest`

NewResolveRoomMaintenanceRequestWithDefaults instantiates a new ResolveRoomMaintenanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ResolveRoomMaintenanceRequest) GetCriteria() RoomMaintenanceChangeType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ResolveRoomMaintenanceRequest) GetCriteriaOk() (*RoomMaintenanceChangeType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ResolveRoomMaintenanceRequest) SetCriteria(v RoomMaintenanceChangeType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ResolveRoomMaintenanceRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ResolveRoomMaintenanceRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResolveRoomMaintenanceRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResolveRoomMaintenanceRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResolveRoomMaintenanceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ResolveRoomMaintenanceRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResolveRoomMaintenanceRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResolveRoomMaintenanceRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResolveRoomMaintenanceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



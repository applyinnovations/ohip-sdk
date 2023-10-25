# PostRoomMaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoomMaintenanceRequestType**](RoomMaintenanceRequestType.md) |  | [optional] 
**IncludeDetails** | Pointer to **bool** | Attribute to decide whether response should include additional details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomMaintenanceRequest

`func NewPostRoomMaintenanceRequest() *PostRoomMaintenanceRequest`

NewPostRoomMaintenanceRequest instantiates a new PostRoomMaintenanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomMaintenanceRequestWithDefaults

`func NewPostRoomMaintenanceRequestWithDefaults() *PostRoomMaintenanceRequest`

NewPostRoomMaintenanceRequestWithDefaults instantiates a new PostRoomMaintenanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostRoomMaintenanceRequest) GetCriteria() RoomMaintenanceRequestType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostRoomMaintenanceRequest) GetCriteriaOk() (*RoomMaintenanceRequestType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostRoomMaintenanceRequest) SetCriteria(v RoomMaintenanceRequestType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostRoomMaintenanceRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetIncludeDetails

`func (o *PostRoomMaintenanceRequest) GetIncludeDetails() bool`

GetIncludeDetails returns the IncludeDetails field if non-nil, zero value otherwise.

### GetIncludeDetailsOk

`func (o *PostRoomMaintenanceRequest) GetIncludeDetailsOk() (*bool, bool)`

GetIncludeDetailsOk returns a tuple with the IncludeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDetails

`func (o *PostRoomMaintenanceRequest) SetIncludeDetails(v bool)`

SetIncludeDetails sets IncludeDetails field to given value.

### HasIncludeDetails

`func (o *PostRoomMaintenanceRequest) HasIncludeDetails() bool`

HasIncludeDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostRoomMaintenanceRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomMaintenanceRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomMaintenanceRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomMaintenanceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomMaintenanceRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomMaintenanceRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomMaintenanceRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomMaintenanceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



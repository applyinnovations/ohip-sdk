# PostOutOfServiceRoomsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoomRepairOutOfServiceCriteria**](RoomRepairOutOfServiceCriteria.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostOutOfServiceRoomsRequest

`func NewPostOutOfServiceRoomsRequest() *PostOutOfServiceRoomsRequest`

NewPostOutOfServiceRoomsRequest instantiates a new PostOutOfServiceRoomsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostOutOfServiceRoomsRequestWithDefaults

`func NewPostOutOfServiceRoomsRequestWithDefaults() *PostOutOfServiceRoomsRequest`

NewPostOutOfServiceRoomsRequestWithDefaults instantiates a new PostOutOfServiceRoomsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostOutOfServiceRoomsRequest) GetCriteria() RoomRepairOutOfServiceCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostOutOfServiceRoomsRequest) GetCriteriaOk() (*RoomRepairOutOfServiceCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostOutOfServiceRoomsRequest) SetCriteria(v RoomRepairOutOfServiceCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostOutOfServiceRoomsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostOutOfServiceRoomsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostOutOfServiceRoomsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostOutOfServiceRoomsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostOutOfServiceRoomsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostOutOfServiceRoomsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostOutOfServiceRoomsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostOutOfServiceRoomsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostOutOfServiceRoomsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoomClassTemplateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomClassTemplate** | Pointer to [**RoomClassTemplateType**](RoomClassTemplateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomClassTemplateCriteria

`func NewRoomClassTemplateCriteria() *RoomClassTemplateCriteria`

NewRoomClassTemplateCriteria instantiates a new RoomClassTemplateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassTemplateCriteriaWithDefaults

`func NewRoomClassTemplateCriteriaWithDefaults() *RoomClassTemplateCriteria`

NewRoomClassTemplateCriteriaWithDefaults instantiates a new RoomClassTemplateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomClassTemplateCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomClassTemplateCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomClassTemplateCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomClassTemplateCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomClassTemplate

`func (o *RoomClassTemplateCriteria) GetRoomClassTemplate() RoomClassTemplateType`

GetRoomClassTemplate returns the RoomClassTemplate field if non-nil, zero value otherwise.

### GetRoomClassTemplateOk

`func (o *RoomClassTemplateCriteria) GetRoomClassTemplateOk() (*RoomClassTemplateType, bool)`

GetRoomClassTemplateOk returns a tuple with the RoomClassTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClassTemplate

`func (o *RoomClassTemplateCriteria) SetRoomClassTemplate(v RoomClassTemplateType)`

SetRoomClassTemplate sets RoomClassTemplate field to given value.

### HasRoomClassTemplate

`func (o *RoomClassTemplateCriteria) HasRoomClassTemplate() bool`

HasRoomClassTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomClassTemplateCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomClassTemplateCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomClassTemplateCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomClassTemplateCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


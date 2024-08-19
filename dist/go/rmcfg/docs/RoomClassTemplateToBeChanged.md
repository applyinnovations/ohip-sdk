# RoomClassTemplateToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomClassTemplate** | Pointer to [**RoomClassTemplateType**](RoomClassTemplateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomClassTemplateToBeChanged

`func NewRoomClassTemplateToBeChanged() *RoomClassTemplateToBeChanged`

NewRoomClassTemplateToBeChanged instantiates a new RoomClassTemplateToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassTemplateToBeChangedWithDefaults

`func NewRoomClassTemplateToBeChangedWithDefaults() *RoomClassTemplateToBeChanged`

NewRoomClassTemplateToBeChangedWithDefaults instantiates a new RoomClassTemplateToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomClassTemplateToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomClassTemplateToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomClassTemplateToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomClassTemplateToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomClassTemplate

`func (o *RoomClassTemplateToBeChanged) GetRoomClassTemplate() RoomClassTemplateType`

GetRoomClassTemplate returns the RoomClassTemplate field if non-nil, zero value otherwise.

### GetRoomClassTemplateOk

`func (o *RoomClassTemplateToBeChanged) GetRoomClassTemplateOk() (*RoomClassTemplateType, bool)`

GetRoomClassTemplateOk returns a tuple with the RoomClassTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClassTemplate

`func (o *RoomClassTemplateToBeChanged) SetRoomClassTemplate(v RoomClassTemplateType)`

SetRoomClassTemplate sets RoomClassTemplate field to given value.

### HasRoomClassTemplate

`func (o *RoomClassTemplateToBeChanged) HasRoomClassTemplate() bool`

HasRoomClassTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomClassTemplateToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomClassTemplateToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomClassTemplateToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomClassTemplateToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AssignRoomsAIRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCodes** | Pointer to **[]string** |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAssignRoomsAIRequest

`func NewAssignRoomsAIRequest() *AssignRoomsAIRequest`

NewAssignRoomsAIRequest instantiates a new AssignRoomsAIRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignRoomsAIRequestWithDefaults

`func NewAssignRoomsAIRequestWithDefaults() *AssignRoomsAIRequest`

NewAssignRoomsAIRequestWithDefaults instantiates a new AssignRoomsAIRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCodes

`func (o *AssignRoomsAIRequest) GetHotelCodes() []string`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *AssignRoomsAIRequest) GetHotelCodesOk() (*[]string, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *AssignRoomsAIRequest) SetHotelCodes(v []string)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *AssignRoomsAIRequest) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *AssignRoomsAIRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AssignRoomsAIRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AssignRoomsAIRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AssignRoomsAIRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



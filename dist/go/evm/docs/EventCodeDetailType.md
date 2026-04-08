# EventCodeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Date for which the event code is applicable. | [optional] 
**Event** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Color** | Pointer to [**StatusColorType**](StatusColorType.md) |  | [optional] 
**EventCodeType** | Pointer to [**EventCodeTypeType**](EventCodeTypeType.md) |  | [optional] 
**BlockStatus** | Pointer to **string** | Status of the catering block | [optional] 
**BlockName** | Pointer to **string** | Block Name. | [optional] 
**NonCompeteIndustry** | Pointer to **string** | Holds the industry description. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code associated with the Event Code. | [optional] 

## Methods

### NewEventCodeDetailType

`func NewEventCodeDetailType() *EventCodeDetailType`

NewEventCodeDetailType instantiates a new EventCodeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCodeDetailTypeWithDefaults

`func NewEventCodeDetailTypeWithDefaults() *EventCodeDetailType`

NewEventCodeDetailTypeWithDefaults instantiates a new EventCodeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *EventCodeDetailType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *EventCodeDetailType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *EventCodeDetailType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *EventCodeDetailType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetEvent

`func (o *EventCodeDetailType) GetEvent() CodeDescriptionType`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *EventCodeDetailType) GetEventOk() (*CodeDescriptionType, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *EventCodeDetailType) SetEvent(v CodeDescriptionType)`

SetEvent sets Event field to given value.

### HasEvent

`func (o *EventCodeDetailType) HasEvent() bool`

HasEvent returns a boolean if a field has been set.

### GetColor

`func (o *EventCodeDetailType) GetColor() StatusColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *EventCodeDetailType) GetColorOk() (*StatusColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *EventCodeDetailType) SetColor(v StatusColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *EventCodeDetailType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetEventCodeType

`func (o *EventCodeDetailType) GetEventCodeType() EventCodeTypeType`

GetEventCodeType returns the EventCodeType field if non-nil, zero value otherwise.

### GetEventCodeTypeOk

`func (o *EventCodeDetailType) GetEventCodeTypeOk() (*EventCodeTypeType, bool)`

GetEventCodeTypeOk returns a tuple with the EventCodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCodeType

`func (o *EventCodeDetailType) SetEventCodeType(v EventCodeTypeType)`

SetEventCodeType sets EventCodeType field to given value.

### HasEventCodeType

`func (o *EventCodeDetailType) HasEventCodeType() bool`

HasEventCodeType returns a boolean if a field has been set.

### GetBlockStatus

`func (o *EventCodeDetailType) GetBlockStatus() string`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *EventCodeDetailType) GetBlockStatusOk() (*string, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *EventCodeDetailType) SetBlockStatus(v string)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *EventCodeDetailType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockName

`func (o *EventCodeDetailType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *EventCodeDetailType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *EventCodeDetailType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *EventCodeDetailType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetNonCompeteIndustry

`func (o *EventCodeDetailType) GetNonCompeteIndustry() string`

GetNonCompeteIndustry returns the NonCompeteIndustry field if non-nil, zero value otherwise.

### GetNonCompeteIndustryOk

`func (o *EventCodeDetailType) GetNonCompeteIndustryOk() (*string, bool)`

GetNonCompeteIndustryOk returns a tuple with the NonCompeteIndustry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompeteIndustry

`func (o *EventCodeDetailType) SetNonCompeteIndustry(v string)`

SetNonCompeteIndustry sets NonCompeteIndustry field to given value.

### HasNonCompeteIndustry

`func (o *EventCodeDetailType) HasNonCompeteIndustry() bool`

HasNonCompeteIndustry returns a boolean if a field has been set.

### GetHotelId

`func (o *EventCodeDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventCodeDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventCodeDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventCodeDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



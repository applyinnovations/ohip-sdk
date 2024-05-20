# BookingStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Color** | Pointer to [**StatusColorType**](StatusColorType.md) |  | [optional] 
**Status** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewBookingStatusType

`func NewBookingStatusType() *BookingStatusType`

NewBookingStatusType instantiates a new BookingStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookingStatusTypeWithDefaults

`func NewBookingStatusTypeWithDefaults() *BookingStatusType`

NewBookingStatusTypeWithDefaults instantiates a new BookingStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColor

`func (o *BookingStatusType) GetColor() StatusColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *BookingStatusType) GetColorOk() (*StatusColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *BookingStatusType) SetColor(v StatusColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *BookingStatusType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetStatus

`func (o *BookingStatusType) GetStatus() CodeDescriptionType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BookingStatusType) GetStatusOk() (*CodeDescriptionType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BookingStatusType) SetStatus(v CodeDescriptionType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BookingStatusType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



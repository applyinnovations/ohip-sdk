# PutChannelHotelLettersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelHotelLetters** | Pointer to [**[]ChannelHotelLetterType**](ChannelHotelLetterType.md) | Collection of Hotel Letters Type | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelHotelLettersRequest

`func NewPutChannelHotelLettersRequest() *PutChannelHotelLettersRequest`

NewPutChannelHotelLettersRequest instantiates a new PutChannelHotelLettersRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelHotelLettersRequestWithDefaults

`func NewPutChannelHotelLettersRequestWithDefaults() *PutChannelHotelLettersRequest`

NewPutChannelHotelLettersRequestWithDefaults instantiates a new PutChannelHotelLettersRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelHotelLetters

`func (o *PutChannelHotelLettersRequest) GetChannelHotelLetters() []ChannelHotelLetterType`

GetChannelHotelLetters returns the ChannelHotelLetters field if non-nil, zero value otherwise.

### GetChannelHotelLettersOk

`func (o *PutChannelHotelLettersRequest) GetChannelHotelLettersOk() (*[]ChannelHotelLetterType, bool)`

GetChannelHotelLettersOk returns a tuple with the ChannelHotelLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelHotelLetters

`func (o *PutChannelHotelLettersRequest) SetChannelHotelLetters(v []ChannelHotelLetterType)`

SetChannelHotelLetters sets ChannelHotelLetters field to given value.

### HasChannelHotelLetters

`func (o *PutChannelHotelLettersRequest) HasChannelHotelLetters() bool`

HasChannelHotelLetters returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelHotelLettersRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelHotelLettersRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelHotelLettersRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelHotelLettersRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelHotelLettersRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelHotelLettersRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelHotelLettersRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelHotelLettersRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# LinkReservationInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Link** | Pointer to **bool** |  | [optional] 
**LinkFromReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LinkToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewLinkReservationInstructionType

`func NewLinkReservationInstructionType() *LinkReservationInstructionType`

NewLinkReservationInstructionType instantiates a new LinkReservationInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkReservationInstructionTypeWithDefaults

`func NewLinkReservationInstructionTypeWithDefaults() *LinkReservationInstructionType`

NewLinkReservationInstructionTypeWithDefaults instantiates a new LinkReservationInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLink

`func (o *LinkReservationInstructionType) GetLink() bool`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *LinkReservationInstructionType) GetLinkOk() (*bool, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *LinkReservationInstructionType) SetLink(v bool)`

SetLink sets Link field to given value.

### HasLink

`func (o *LinkReservationInstructionType) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetLinkFromReservationId

`func (o *LinkReservationInstructionType) GetLinkFromReservationId() UniqueIDType`

GetLinkFromReservationId returns the LinkFromReservationId field if non-nil, zero value otherwise.

### GetLinkFromReservationIdOk

`func (o *LinkReservationInstructionType) GetLinkFromReservationIdOk() (*UniqueIDType, bool)`

GetLinkFromReservationIdOk returns a tuple with the LinkFromReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkFromReservationId

`func (o *LinkReservationInstructionType) SetLinkFromReservationId(v UniqueIDType)`

SetLinkFromReservationId sets LinkFromReservationId field to given value.

### HasLinkFromReservationId

`func (o *LinkReservationInstructionType) HasLinkFromReservationId() bool`

HasLinkFromReservationId returns a boolean if a field has been set.

### GetLinkToReservationId

`func (o *LinkReservationInstructionType) GetLinkToReservationId() UniqueIDType`

GetLinkToReservationId returns the LinkToReservationId field if non-nil, zero value otherwise.

### GetLinkToReservationIdOk

`func (o *LinkReservationInstructionType) GetLinkToReservationIdOk() (*UniqueIDType, bool)`

GetLinkToReservationIdOk returns a tuple with the LinkToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkToReservationId

`func (o *LinkReservationInstructionType) SetLinkToReservationId(v UniqueIDType)`

SetLinkToReservationId sets LinkToReservationId field to given value.

### HasLinkToReservationId

`func (o *LinkReservationInstructionType) HasLinkToReservationId() bool`

HasLinkToReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



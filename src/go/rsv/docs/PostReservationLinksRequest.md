# PostReservationLinksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**LinkReservationsCriteriaResponseInstruction**](LinkReservationsCriteriaResponseInstruction.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostReservationLinksRequest

`func NewPostReservationLinksRequest() *PostReservationLinksRequest`

NewPostReservationLinksRequest instantiates a new PostReservationLinksRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReservationLinksRequestWithDefaults

`func NewPostReservationLinksRequestWithDefaults() *PostReservationLinksRequest`

NewPostReservationLinksRequestWithDefaults instantiates a new PostReservationLinksRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkToReservationId

`func (o *PostReservationLinksRequest) GetLinkToReservationId() UniqueIDType`

GetLinkToReservationId returns the LinkToReservationId field if non-nil, zero value otherwise.

### GetLinkToReservationIdOk

`func (o *PostReservationLinksRequest) GetLinkToReservationIdOk() (*UniqueIDType, bool)`

GetLinkToReservationIdOk returns a tuple with the LinkToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkToReservationId

`func (o *PostReservationLinksRequest) SetLinkToReservationId(v UniqueIDType)`

SetLinkToReservationId sets LinkToReservationId field to given value.

### HasLinkToReservationId

`func (o *PostReservationLinksRequest) HasLinkToReservationId() bool`

HasLinkToReservationId returns a boolean if a field has been set.

### GetLinks

`func (o *PostReservationLinksRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReservationLinksRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReservationLinksRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReservationLinksRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PostReservationLinksRequest) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PostReservationLinksRequest) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PostReservationLinksRequest) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PostReservationLinksRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *PostReservationLinksRequest) GetResponseInstruction() LinkReservationsCriteriaResponseInstruction`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *PostReservationLinksRequest) GetResponseInstructionOk() (*LinkReservationsCriteriaResponseInstruction, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *PostReservationLinksRequest) SetResponseInstruction(v LinkReservationsCriteriaResponseInstruction)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *PostReservationLinksRequest) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReservationLinksRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReservationLinksRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReservationLinksRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReservationLinksRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


